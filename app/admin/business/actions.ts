"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { timingSafeCompare, deriveSessionToken } from "@/lib/admin/auth";

/**
 * Server-side brute-force protection for admin authentication.
 * Limits failed attempts from a single IP address within a rolling window.
 * Default: maximum 5 attempts per 15 minutes per IP.
 */
const AUTH_ATTEMPT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const AUTH_MAX_ATTEMPTS = 5;
const authAttemptMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = authAttemptMap.get(ip);

  if (!entry || now > entry.resetAt) {
    authAttemptMap.set(ip, { count: 1, resetAt: now + AUTH_ATTEMPT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > AUTH_MAX_ATTEMPTS;
}

function recordFailedAttempt(ip: string): void {
  const now = Date.now();
  const entry = authAttemptMap.get(ip);
  if (!entry || now > entry.resetAt) {
    authAttemptMap.set(ip, { count: 1, resetAt: now + AUTH_ATTEMPT_WINDOW_MS });
  } else {
    entry.count += 1;
  }
}

function clearAttempts(ip: string): void {
  authAttemptMap.delete(ip);
}

/**
 * Server action: authenticate an admin session.
 * - Key is submitted via POST FormData (never in URL or query params).
 * - Validated using timing-safe comparison against process.env.ADMIN_ACCESS_KEY.
 * - Raw key is NEVER stored in the cookie — only an HMAC-derived session token.
 * - Rate-limits failed password guessing attempts.
 * - Cookie is HttpOnly, SameSite=Strict, Secure (production), 8-hour expiry.
 */
export async function authenticateAdmin(formData: FormData): Promise<void> {
  const headerStore = await headers();
  const ip =
    headerStore.get("x-forwarded-for")?.split(",")[0].trim() ||
    headerStore.get("x-real-ip") ||
    "127.0.0.1";

  // Enforce brute-force rate limit
  if (isRateLimited(ip)) {
    redirect("/admin/business");
  }

  const submittedKey = formData.get("key");
  const expectedKey = process.env.ADMIN_ACCESS_KEY;

  const hasValidInput =
    typeof expectedKey === "string" &&
    expectedKey.trim().length > 0 &&
    typeof submittedKey === "string" &&
    submittedKey.trim().length > 0;

  const isValid = hasValidInput && timingSafeCompare(submittedKey, expectedKey);

  if (isValid) {
    clearAttempts(ip);

    // Derive an HMAC session token — the master ADMIN_ACCESS_KEY itself is NEVER in the cookie
    const sessionToken = deriveSessionToken(expectedKey);

    const cookieStore = await cookies();
    cookieStore.set("admin_auth_token", sessionToken, {
      httpOnly: true,                                 // Disallow client-side JavaScript access
      secure: process.env.NODE_ENV === "production", // HTTPS only in production
      sameSite: "strict",                            // Strict CSRF mitigation
      maxAge: 60 * 60 * 8,                          // 8-hour expiration
      path: "/admin",                                // Scoped strictly to /admin
    });
  } else {
    recordFailedAttempt(ip);
  }

  // Consistent redirect to prevent timing/oracle enumeration
  redirect("/admin/business");
}

/**
 * Server action: log out of the admin session.
 * Clears the session cookie immediately and redirects to the lock screen.
 */
export async function logoutAdmin(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set("admin_auth_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0, // Expire immediately
    path: "/admin",
  });
  redirect("/admin/business");
}
