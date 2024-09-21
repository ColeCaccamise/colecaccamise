import React from "react";
import Image from "next/image";

export default function Avatar({
  width = 72,
  height = 72,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src="/cole.jpg"
      width={width}
      height={height}
      className="rounded-full"
      alt="Cole Caccamise"
    />
  );
}
