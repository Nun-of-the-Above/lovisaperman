import { useEffect, useState } from "react";

import Image from "next/image";

interface VoicePlayerProps {
  soundName: string;
  soundUrl: string;
}

export const VoicePlayer = ({ soundName, soundUrl }: VoicePlayerProps) => {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    setAudio(new Audio(soundUrl));
  }, [soundUrl]);

  return (
    <>
      {audio && (
        <>
          <button
            onClick={() => {
              isPlaying ? audio.pause() : audio.play();
              setIsPlaying((prev) => !prev);
            }}
          >
            <Image
              src={isPlaying ? "/pause-button.svg" : "/play-button.svg"}
              alt="Portrait of Lovisa smiling."
              width={30}
              height={30}
              className=""
            />
          </button>
        </>
      )}
    </>
  );
};
