/**
 * Currency utilities for Rishvin Labs pricing display.
 * Primary currency: INR (₹)
 * Secondary (small text alongside): USD ($)
 *
 * Conversion: 1 INR ≈ 0.012 USD  →  1 USD ≈ 84 INR
 */

const USD_PER_INR = 0.012;

/**
 * Strips commas and parses an INR price string like "49,999" → 49999
 */
function parseINR(inrStr: string): number {
  return parseInt(inrStr.replace(/,/g, ""), 10);
}

/**
 * Formats a number as a compact USD string, e.g. 599.88 → "$600"
 * Uses K suffix for values ≥ 1000, e.g. 1800 → "~$1.8K"
 */
export function toUSD(inrStr: string): string {
  const inr = parseINR(inrStr);
  const usd = Math.round(inr * USD_PER_INR);
  if (usd >= 1000) {
    const k = (usd / 1000).toFixed(1).replace(/\.0$/, "");
    return `~$${k}K`;
  }
  return `~$${usd}`;
}
