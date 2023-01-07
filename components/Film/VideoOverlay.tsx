import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  videoUrl: string;
  setShowOverlay: Dispatch<SetStateAction<boolean>>;
}

// TODO: Prefetch thumbnail/blurred image or prefetch entire video
// TODO: Add escape key closing
// TODO: Add cross escape in left corner
// TODO: Add autoplay in iframe
// TODO: Needs to be relative to the fixed screen

export const VideoOverlay = ({ videoUrl, setShowOverlay }: Props) => (
  <>
    <div className="fixed top-0 z-40 flex items-center justify-center w-screen h-screen">
      <iframe
        src={videoUrl}
        className="z-50 w-full max-w-5xl aspect-video h-fit"
        allow="autoplay"
        allowFullScreen
      ></iframe>

      <div
        className="absolute z-30 w-screen h-screen bg-black opacity-80"
        onClick={() => setShowOverlay(false)}
      ></div>
    </div>
  </>
);
