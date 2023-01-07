import { Dispatch, SetStateAction, useEffect, useState } from "react";

import Image from "next/image";
import VoiceScribble from "../public/voice-scribble.svg";

interface VoicePlayerProps {
  id: string;
  audioTitle: string;
  audioUrl: string;
  pause: boolean;
  setTrackPlaying: Dispatch<SetStateAction<string>>;
  trackPlaying: string;
}

// TODO: Make

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
            {/* TODO: Turn image into backgorund of button instead */}
            <Image
              src={isPlaying ? "/pause-button.svg" : "/play-button.svg"}
              alt={audioTitle}
              width={40}
              height={40}
              className="min-w-[40px]"
            />
          </button>
          <div className="flex flex-col">
            <VoiceScribble
              alt="Audio scribble"
              className={`${
                isPlaying
                  ? "transition-transform animate-[wiggle_1s_ease-in-out_infinite]"
                  : ""
              }`}
            />
            <p className="text-white">{audioTitle}</p>
          </div>
        </div>
      )}
    </div>
  );
};
