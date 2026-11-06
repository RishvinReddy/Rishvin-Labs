import React from "react";
import Image from "next/image";

export interface RishvinLogoProps {
  variant?: "horizontal" | "mark" | "monogram";
  theme?: "light" | "dark" | "auto";
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  alt?: string;
}

/**
 * Official Rishvin Labs Brand Identity Component
 * Supports:
 * - "horizontal": Full horizontal logo mark + wordmark
 * - "mark": Official square squircle app icon
 * - "monogram": Transparent geometric RL monogram
 */
export function RishvinLogo({
  variant = "horizontal",
  theme = "auto",
  className = "",
  width,
  height,
  priority = false,
  alt = "Rishvin Labs",
}: RishvinLogoProps) {
  if (variant === "mark") {
    const size = width || height || 40;
    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
        <Image
          src="/icon.png"
          alt={alt}
          width={size}
          height={size}
          priority={priority}
          className="w-full h-full object-contain rounded-xl shadow-xs"
        />
      </div>
    );
  }

  if (variant === "monogram") {
    const w = width || 44;
    const h = height || Math.round(w * (514 / 746));
    const src = theme === "dark" 
      ? "/images/rishvin-labs-monogram-dark.png" 
      : "/images/rishvin-labs-monogram-transparent.png";

    return (
      <div className={`relative inline-flex items-center shrink-0 ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={w}
          height={h}
          priority={priority}
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  // Default: Horizontal Logo
  const w = width || 180;
  const h = height || Math.round(w * (341 / 1024));

  if (theme === "dark") {
    return (
      <div className={`relative inline-flex items-center ${className}`}>
        <Image
          src="/images/rishvin-labs-logo-horizontal-dark.png"
          alt={alt}
          width={w}
          height={h}
          priority={priority}
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  if (theme === "light") {
    return (
      <div className={`relative inline-flex items-center ${className}`}>
        <Image
          src="/images/rishvin-labs-logo-horizontal-transparent.png"
          alt={alt}
          width={w}
          height={h}
          priority={priority}
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  // Auto theme: renders transparent light version, or adapts via dark CSS classes
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Light theme display */}
      <Image
        src="/images/rishvin-labs-logo-horizontal-transparent.png"
        alt={alt}
        width={w}
        height={h}
        priority={priority}
        className="w-full h-auto object-contain dark:hidden"
      />
      {/* Dark theme display */}
      <Image
        src="/images/rishvin-labs-logo-horizontal-dark.png"
        alt={alt}
        width={w}
        height={h}
        priority={priority}
        className="w-full h-auto object-contain hidden dark:block"
      />
    </div>
  );
}

