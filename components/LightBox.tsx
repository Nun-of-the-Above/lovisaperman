import Lightbox, { ImagesListType } from "react-spring-lightbox";
import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
  images: ImagesListType;
  isOpen: boolean;
  setShowOverlay: Dispatch<SetStateAction<boolean>>;
}

// TODO: Add custom footer with thumbnails and highlight of current image
// TODO: Add some text to each image
// TODO: Add right/left icons on image overlay

export const CoolLightbox = ({ images, isOpen, setShowOverlay }: Props) => {
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

  return (
    <Lightbox
      isOpen={isOpen}
      onPrev={gotoPrevious}
      onClose={() => setShowOverlay(false)}
      onNext={gotoNext}
      images={images}
      currentIndex={currentImageIndex}
      className="z-10 p-10 bg-black bg-opacity-70"
      /* Add your own UI */
      // renderHeader={() => (<CustomHeader />)}
      // renderFooter={() => <CustomFooter />}
      // renderPrevButton={() => <CustomArrowButton direction="left" />}
      // renderNextButton={() => <CustomArrowButton direction="right" />}
      // renderImageOverlay={() => <ImageOverlayComponent />}

      /* Handle closing */
      // onClose={handleClose}

      /* react-spring config for open/close animation */
      // pageTransitionConfig={{
      //   from: { transform: "scale(0.75)", opacity: 0 },
      //   enter: { transform: "scale(1)", opacity: 1 },
      //   leave: { transform: "scale(0.75)", opacity: 0 },
      //   config: { mass: 1, tension: 320, friction: 32 }
      // }}
    />
  );
};
