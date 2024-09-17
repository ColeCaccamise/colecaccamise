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
      src="https://yt3.googleusercontent.com/xnP_Sb0Q94pr6mO5eBzH9j8NsZXStvTrpu4QTXjzDVoI25lTZ0FbPWVuivSqbUTHfPl-pwCxeA=s900-c-k-c0x00ffffff-no-rj"
      width={width}
      height={height}
      className="rounded-full"
      alt="Cole Caccamise"
    />
  );
}
