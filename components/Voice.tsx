import Image from "next/image";
import VoiceImage from "../public/voice.png";
import { VoicePlayer } from "./VoicePlayer";
import { audioMockData } from "./audioMockData";
import { useState } from "react";

export const Voice = () => {
  // TODO: Add cms support with sanity for the audio files
  // TODO: Move all functionality into useAudio()

  const [trackPlaying, setTrackPlaying] = useState<string>("");

  return (
    <div className="absolute flex flex-col bottom-2 left-1/2">
      <h2 className="top-0 self-center mb-5 text-2xl font-thin tracking-wider text-white">
        RÖST
      </h2>
      <Image
        src={VoiceImage}
        alt="Anatomy sketch of a throat."
        className="self-center"
      />

      {audioMockData.map((audio) => (
        <VoicePlayer
          key={audio.id}
          {...audio}
          pause={trackPlaying !== audio.id}
          setTrackPlaying={setTrackPlaying}
          trackPlaying={trackPlaying}
        />
      ))}
    </div>
  );
};
