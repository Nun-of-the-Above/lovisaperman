import { useState } from "react";
export const useAudio = () => {
  const [audioIdPlaying, setAudioIdPlaying] = useState();

  return { audioIdPlaying, setAudioIdPlaying };
};
