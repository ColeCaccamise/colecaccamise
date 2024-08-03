import { YouTubeEmbed } from "@next/third-parties/google";
import Video from "next-video";

export default function VideoPlayer({ url }: { url: string }) {
  console.log(url);
  if (url === undefined) {
    return null;
  }

  // return null if not youtube.com or youtu.be
  if (
    typeof url !== "string" ||
    (!url.includes("youtube.com") && !url.includes("youtu.be"))
  ) {
    return <Video src={url} accentColor="#5e69d1" loop />;
  } else {
    const videoId = url.includes("youtu.be")
      ? url.split("youtu.be/")[1]
      : url.split("v=")[1];

    return (
      <div className="overflow-hidden rounded-md">
        <YouTubeEmbed videoid={videoId} params="web-share;" />
      </div>
    );
  }
}
