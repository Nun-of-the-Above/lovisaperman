import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import Lightbox, { ImagesListType } from "react-spring-lightbox";

interface Props {
  images: ImagesListType;
  isOpen: boolean;
  downloadButton?: boolean;
  singleClickZoom?: boolean;
  setShowOverlay: Dispatch<SetStateAction<boolean>>;
}

// TODO: Add custom footer with thumbnails and highlight of current image
// TODO: Add some text to each image
// TODO: Add right/left icons on image overlay

export const CoolLightbox = ({
  images,
  isOpen,
  setShowOverlay,
  downloadButton,
  singleClickZoom,
}: Props) => {
  const [currentImageIndex, setCurrentIndex] = useState(0);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  // const ImageOverlayComponent = () => (
  //   <div className="absolute z-40 flex justify-between w-full h-full">
  //     <div
  //       onClick={gotoPrevious}
  //       className="w-[20vh] h-full bg-red-500 opacity-30"
  //     />
  //     <div
  //       onClick={gotoNext}
  //       className=" w-[20vh] h-full bg-green-500 opacity-30"
  //     ></div>
  //   </div>
  // );

  const DownloadFooter = () => (
    <div className="flex items-center justify-center">
      <a
        href="/CV-Lovisa-Perman.pdf"
        download
        className=" text-slate-800 bg-wax-flower-300 hover:bg-wax-flower-400  focus:ring-4 focus:ring-wax-flower-500 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none   z-50 flex gap-2 items-center justify-center font-sans w-fit"
      >
        <p className="font-sans uppercase">Ladda ner CV</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
          />
        </svg>
      </a>
    </div>
  );

  return (
    <Lightbox
      isOpen={isOpen}
      onPrev={gotoPrevious}
      onClose={() => setShowOverlay(false)}
      onNext={gotoNext}
      images={images}
      currentIndex={currentImageIndex}
      className="z-10 p-10 bg-black bg-opacity-70"
      renderFooter={() => (
        <>
          {downloadButton ? (
            <DownloadFooter />
          ) : (
            <div className="text-center text-white font-thin font-sans text-lg">
              {images.find((_, i) => i === currentImageIndex)?.alt}
            </div>
          )}
        </>
      )}
      renderPrevButton={() => (
        <button onClick={gotoPrevious} className="z-10 hidden md:block">
          <Image
            src="/icons/left-arrow.svg"
            alt=""
            width={100}
            height={150}
            className=""
          />
        </button>
      )}
      renderNextButton={() => (
        <button onClick={gotoNext} className="z-10 hidden md:block">
          {" "}
          <Image
            src="/icons/right-arrow.svg"
            alt=""
            width={100}
            height={150}
            className="hover:animate-"
          />
        </button>
      )}
      // renderImageOverlay={() => <ImageOverlayComponent />}

      /* Handle closing */
      // onClose={handleClose}
      singleClickToZoom={singleClickZoom}
      /* react-spring config for open/close animation */
      // pageTransitionConfig={{
      //   from: { transform: "scale(0.75)", opacity: 0 },
      //   enter: { transform: "scale(1)", opacity: 1 },
      //   leave: { transform: "scale(0.75)", opacity: 0 },
      //   config: { mass: 1, tension: 320, friction: 32 },
      // }}
    />
  );
};
