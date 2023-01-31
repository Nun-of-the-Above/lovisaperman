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
        className="flex items-center justify-center group hover:cursor-pointer"
        onClick={() => handleVideo({ videoUrl, visible: true })}
      >
        <FilmFrame className="absolute invisible aspect-video md:group-hover:visible group-hover:animate-vibrate-slow " />
        <Image
          src={`/film/thumbnails/${thumbnailUrl}`}
          width={273}
          height={146}
          alt="Thumbnail for video"
          className=""
        />
      </div>
      <h3 className="-mt-3 font-thin tracking-widest text-center text-white text-md font-kung md:text-md">
        {videoTitle} {videoTitle === "Shortreel" && <br />}
        {videoTitle === "Shortreel" && "(för dig som har brådis)"}
      </h3>
    </div>
  );
};
