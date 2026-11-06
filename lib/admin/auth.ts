import crypto from "crypto";
import { cookies } from "next/headers";

/**
 * Constant-time string comparison to prevent timing attacks on sensitive key verification.
 */
export function timingSafeCompare(a: string, b: string): boolean {
  if (typeof a !== "string" || typeof b !== "string") {
    return false;
  }
  const bufA = Buffer.from(a, "utf8");
  const bufB = Buffer.from(b, "utf8");

  if (bufA.length !== bufB.length) {
    // Perform dummy timingSafeEqual to avoid timing difference when lengths differ
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }

  return crypto.timingSafeEqual(bufA, bufB);
}

/**
 * Generates a SHA-256 session token from the master ADMIN_ACCESS_KEY.
 * This ensures the raw ADMIN_ACCESS_KEY is never stored verbatim inside the client cookie.
 */
export function deriveSessionToken(adminKey: string): string {
  return crypto.createHmac("sha256", adminKey).update("rishvin-labs-admin-session").digest("hex");
}

/**
 * Validates the current admin session from incoming cookies.
 * Returns true if and only if:
 * 1. ADMIN_ACCESS_KEY is configured on the server
 * 2. An admin_auth_token cookie is present
 * 3. The cookie matches the derived session token using timing-safe comparison
 */
export async function isAuthorizedAdmin(): Promise<boolean> {
  const expectedKey = process.env.ADMIN_ACCESS_KEY;
  if (!expectedKey || expectedKey.trim().length === 0) {
    return false;
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("admin_auth_token")?.value;
  if (!token) {
    return false;
  }

  const expectedToken = deriveSessionToken(expectedKey);
  return timingSafeCompare(token, expectedToken);
}

