"use client";

// src/components/BrandLogo.tsx
import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  size?: number; // height in pixels; width auto via intrinsic ratio
  priority?: boolean;
};

export default function BrandLogo({ size = 28, priority = false }: BrandLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Nineprime Home">
      {/* Full lockup scales down nicely in navbar */}
      <div style={{height: size, width: Math.round(size * 3.6)}} className="relative">
        <Image
          src="/nineprime-full.svg"
          alt="Nineprime logo"
          fill
          priority={priority}
          sizes={`${size}px`}
          className="object-contain"
        />
      </div>
    </Link>
  );
}


