"use client";

import { Suspense } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";

export default function VideoPlayer({ url }: { url: string }) {
  if (!url) {
    return null;
  }

  if (
    typeof url !== "string" ||
    (!url.includes("youtube.com") && !url.includes("youtu.be"))
  ) {
    return (
      <Suspense fallback={<div>Loading video...</div>}>
        <video
          src={url}
          width="100%"
          height="auto"
          controls
          preload="auto"
          className="rounded-md"
          autoPlay
          muted
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </Suspense>
    );
  } else {
    const videoId = url.includes("youtu.be")
      ? url.split("youtu.be/")[1]
      : url.split("v=")[1];

    return (
      <Suspense fallback={<div>Loading YouTube video...</div>}>
        <div className="overflow-hidden rounded-md">
          <YouTubeEmbed videoid={videoId} params="web-share;" />
        </div>
      </Suspense>
    );
  }
}
