import { VideoOverlay } from "./VideoOverlay";
import { VideoThumbnail } from "./VideoThumbnail";
import { useDisableScroll } from "./useDisableScroll";
import { useState } from "react";
import { videoMockData } from "./videoMockData";

export interface HandleVideoProps {
  visible: boolean;
  videoUrl: string | undefined;
}

export const Film = () => {
  // TODO: Turn into useVideo-hook and use directly at children
  // TODO: Add cms support with sanity.io
  // TODO: Get thumbnails from vimeo API
  // TODO: Organize folder structure

  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [videoUrlToShow, setVideoUrlToShow] = useState<string>();
  useDisableScroll(showOverlay);

  const handleVideo = ({ visible, videoUrl }: HandleVideoProps) => {
    setShowOverlay(visible);
    setVideoUrlToShow(videoUrl);
  };

  return (
    <>
      <div className="relative flex flex-col items-center gap-4 md:-bottom-20 ">
        <h2 className="text-2xl font-thin tracking-wider text-white uppercase">
          Film
        </h2>
        {videoMockData.map(({ id, thumbnailUrl, videoUrl, videoTitle }) => (
          <VideoThumbnail
            key={id}
            videoUrl={videoUrl}
            handleVideo={handleVideo}
            thumbnailUrl={thumbnailUrl}
            videoTitle={videoTitle}
          />
        ))}
      </div>

      {showOverlay && videoUrlToShow && (
        <VideoOverlay
          videoUrl={videoUrlToShow}
          setShowOverlay={setShowOverlay}
        />
      )}
    </>
  );
};
