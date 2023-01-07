import { Dispatch, SetStateAction } from "react";

import FilmFrame from "../../public/film-frame.svg";
import { HandleVideoProps } from "./Film";
import Image from "next/image";

interface Props {
  thumbnailUrl: string | undefined;
  videoUrl: string | undefined;
  handleVideo: ({ visible, videoUrl }: HandleVideoProps) => void;
  videoTitle: string;
}

export const VideoThumbnail = ({
  videoUrl,
  thumbnailUrl,
  handleVideo,
  videoTitle,
}: Props) => {
  if (!videoUrl || !thumbnailUrl) return <></>;

  return (
    <div className="flex flex-col w-[273px] group">
      <div className="" />
      <div
        className="flex items-center justify-center hover:cursor-pointer"
        onClick={() => handleVideo({ videoUrl, visible: true })}
      >
        <FilmFrame className="absolute invisible aspect-video group-hover:visible group-hover:animate-vibrate-slow " />
        <Image
          src={thumbnailUrl}
          width={273}
          height={146}
          alt="Thumbnail for video"
          className="w-full aspect-video"
        />
      </div>
      <h3 className="mt-1 font-thin text-white text-md">{videoTitle}</h3>
    </div>
  );
};
