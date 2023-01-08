import { Dispatch, SetStateAction, useEffect, useState } from "react";

import Image from "next/image";

interface VoicePlayerProps {
  id: string;
  audioTitle: string;
  audioUrl: string;
  pause: boolean;
  setTrackPlaying: Dispatch<SetStateAction<string>>;
  trackPlaying: string;
}

export const VoicePlayer = ({
  audioTitle,
  audioUrl,
  pause,
  id,
  setTrackPlaying,
  trackPlaying,
}: VoicePlayerProps) => {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    setAudio(new Audio(audioUrl));
  }, [audioUrl]);

  useEffect(() => {
    if (pause) {
      setIsPlaying(false);
    }
  }, [pause]);

  useEffect(() => {
    if (audio && isPlaying && trackPlaying !== id) {
      audio.pause();
    }
  }, [isPlaying, audio, id, trackPlaying]);

  return (
    <div className="relative">
      {audio && (
        <div className="flex items-center gap-3 mt-4 ">
          <button
            onClick={() => {
              isPlaying ? audio.pause() : audio.play();
              setIsPlaying((prev) => !prev);
              setTrackPlaying(isPlaying ? "" : id);
            }}
          >
            {/* TODO: Turn image into background of button instead */}
            <Image
              src={
                isPlaying ? "/audio/pause-button.svg" : "/audio/play-button.svg"
              }
              alt={audioTitle}
              width={40}
              height={40}
              className="min-w-[40px] pointer-events-none"
            />
          </button>
          <div className="flex flex-col">
            <Image
              src={"voice-scribble.svg"}
              alt={audioTitle}
              width={150}
              height={40}
              className={`${
                isPlaying
                  ? "transition-transform animate-[wiggle_1s_ease-in-out_infinite]"
                  : ""
              } w-full`}
            />
            <h3 className="mt-1 text-xs font-thin text-white md:text-md">
              {audioTitle}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};
