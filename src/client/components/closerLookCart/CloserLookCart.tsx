"use client";

import Image, { StaticImageData } from "next/image";
import { PlayIcon } from "../Icons";
import { useEffect, useRef } from "react";

interface ICartProps {
  title: string;
  img: StaticImageData;
  video: string;
  isPlay: boolean;
  isDimmed: boolean;
  setIsPlay: (value: boolean) => void;
}

const CloserLookCart = ({
  title,
  img,
  video,
  isPlay,
  isDimmed,
  setIsPlay,
}: ICartProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isPlay) {
      videoElement.play().catch((error) => {
        console.error("Video playback failed:", error);
        setIsPlay(false);
      });
    } else {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  }, [isPlay]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={`relative aspect-300/530 rounded-16p overflow-hidden transition-all duration-300 ease-out
    ${
      isDimmed
        ? "blur-sm scale-95 opacity-70 hover:blur-none hover:scale-100 hover:opacity-100"
        : "blur-none scale-100 opacity-100"
    }`}
    >
      <Image
        src={img}
        alt={title}
        className={`${isPlay ? "hidden" : "inline-block"} w-full h-full object-cover object-center`}
      />

      <video
        src={video}
        ref={videoRef}
        controls
        playsInline
        preload="metadata"
        onEnded={() => setIsPlay(false)}
        className={`${isPlay ? "block" : "hidden"} w-full h-full absolute top-0 left-0 object-cover`}
      />

      {!isPlay && (
        <div
          onClick={() => setIsPlay(true)}
          className="absolute inset-0 cursor-pointer select-none"
        >
          <span className="absolute top-1/2 left-1/2 -translate-1/2 z-10 w-55p aspect-square bg-black-2 rounded-50p border-2 border-white flex items-center justify-center">
            <PlayIcon className="w-20p aspect-square text-white" />
          </span>

          <span className="absolute z-10 left-16p bottom-16p text-18 text-white font-bold">
            {title}
          </span>
        </div>
      )}
    </div>
  );
};

export default CloserLookCart;
