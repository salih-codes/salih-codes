"use client";

import { cn } from "@/lib/utils/cn";
import type React from "react";
import { useEffect, useRef } from "react";

import type { Props as MediaProps } from "../types";

import { getClientSideURL } from "@/lib/utils/get-url";

export const VideoMedia: React.FC<MediaProps> = (props) => {
  const { onClick, resource, videoClassName } = props;

  const videoRef = useRef<HTMLVideoElement>(null);
  // const [showFallback] = useState<boolean>()

  useEffect(() => {
    const { current: video } = videoRef;
    if (video) {
      video.addEventListener("suspend", () => {
        // setShowFallback(true);
        // console.warn('Video was suspended, rendering fallback image.')
      });
    }
  }, []);

  if (resource && typeof resource === "object") {
    const { filename } = resource;

    return (
      // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
      <video
        autoPlay
        className={cn(videoClassName)}
        controls={false}
        loop
        muted
        onClick={onClick}
        playsInline
        ref={videoRef}
      >
        <source src={`${getClientSideURL()}/media/${filename}`} />
      </video>
    );
  }

  return null;
};
