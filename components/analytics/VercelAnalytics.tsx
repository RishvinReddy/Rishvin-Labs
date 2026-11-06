import Script from "next/script";

export function VercelAnalytics() {
  // Only inject script in production to avoid local 404s when running outside Vercel
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <Script
      id="vercel-analytics"
      strategy="lazyOnload"
      src="/_vercel/insights/script.js"
    />
  );
}

