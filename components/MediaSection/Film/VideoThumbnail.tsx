import FilmFrame from "../../../public/film/film-frame.svg";
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
    <div className="flex flex-col w-full">
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
          className=""
        />
      </div>
      <h3 className="mt-1 text-sm font-thin text-white md:text-md">
        {videoTitle}
      </h3>
    </div>
  );
};
