/**
 * Currency utilities for Rishvin Labs pricing display.
 * Primary currency: INR (₹)
 * Secondary (small text alongside): USD ($)
 *
 * Conversion: 1 INR ≈ 0.012 USD  →  1 USD ≈ 84 INR
 */

const USD_PER_INR = 0.012;

/**
 * Formats a number as an INR string with proper commas, e.g. 49999 → "49,999"
 */
export function formatINR(amount: number): string {
  return amount.toLocaleString('en-IN');
}

/**
 * Formats a number as a compact USD string, e.g. 599.88 → "~$600"
 * Uses K suffix for values ≥ 1000, e.g. 1800 → "~$1.8K"
 */
export function toUSD(inrAmount: number): string {
  const usd = Math.round(inrAmount * USD_PER_INR);
  if (usd >= 1000) {
    const k = (usd / 1000).toFixed(1).replace(/\.0$/, "");
    return `~$${k}K`;
  }
  return `~$${usd}`;
}
