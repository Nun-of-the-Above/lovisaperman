import Image from "next/image";
import { useEffect, useState } from "react";
import { VoicePlayer } from "./VoicePlayer";

export const Voice = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="absolute flex flex-col items-center border w-52 h-80 bottom-20 left-1/2">
      <h2 className="top-0 text-2xl font-thin tracking-wider text-white ">
        RÖST
      </h2>
      <Image
        src={"/voice.png"}
        alt="Sketch of a throat."
        width={160}
        height={160}
        className="right-0 w-40 bottom-"
      />

      <VoicePlayer soundName="Test Audio" soundUrl="/testaudio.wav" />
    </div>
  );
};
