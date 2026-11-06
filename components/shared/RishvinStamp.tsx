import React from "react";
import Image from "next/image";

interface RishvinStampProps {
  className?: string;
  size?: number;
  priority?: boolean;
  alt?: string;
}

/**
 * Official Rishvin Labs Company Stamp
 * Renders the studio seal exactly as provided in rishvin-labs-stamp.svg with authentic colors and zero distortion.
 */
export function RishvinStamp({
  className = "w-44 h-auto",
  size = 220,
  priority = false,
  alt = "Official Rishvin Labs Company Stamp",
}: RishvinStampProps) {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <Image
        src="/rishvin-labs-stamp.svg"
        alt={alt}
        width={size}
        height={Math.round(size * (1239 / 1270))}
        priority={priority}
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

