"use client";

import { useState } from "react";
import Image from "next/image";

export default function AspectRatio({
  src,
  alt,
  className,
  width,
  height,
  aspectRatio = 16 / 9,
}: {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height?: number;
  aspectRatio?: number;
}) {
  const [ratio, setRatio] = useState(aspectRatio); // default to 16:9

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={width / ratio}
      layout="responsive" // you can use "responsive", "fill" or the default "intrinsic"
      onLoadingComplete={({ naturalWidth, naturalHeight }) =>
        setRatio(naturalWidth / naturalHeight)
      }
    />
  );
}
