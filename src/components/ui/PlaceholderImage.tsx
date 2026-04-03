"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  placeholderColor?: string;
}

export default function PlaceholderImage({
  src, alt, fill, className, sizes, priority,
  placeholderColor = "#F5EFE0",
}: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`w-full h-full flex items-center justify-center ${fill ? "absolute inset-0" : ""}`}
        style={{ backgroundColor: placeholderColor }}
        aria-label={alt}
        role="img"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C4974A" strokeWidth="1" opacity="0.4" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
