"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageProps {
  url: string;
  description?: string;
  alt?: string;
}

export default function CustomImage({ url, description, alt }: ImageProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isFullscreen]);

  return (
    <div className="relative">
      {/* static image */}
      <div onClick={() => setIsFullscreen(true)} className="cursor-pointer">
        <Image
          src={url}
          alt={alt || "Image"}
          width={800}
          height={600}
          className={`rounded-lg ${isFullscreen ? "invisible" : "visible"}`}
        />
      </div>

      {/* description text */}
      {description && (
        <p className="text-muted-text mt-4 text-center text-xs">
          {description}
        </p>
      )}

      {/* fullscreen version */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 transition-all duration-300 ${
          isFullscreen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setIsFullscreen(false)}
      >
        <div
          className={`transform transition-all duration-300 ${
            isFullscreen ? "scale-100" : "scale-90"
          }`}
        >
          <Image
            src={url}
            alt={alt || "Image"}
            width={1200}
            height={900}
            className="max-h-screen max-w-screen-xl object-contain"
          />
          {description && (
            <p className="text-muted-text mt-4 text-center text-xs">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
