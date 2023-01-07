import { Dispatch, SetStateAction, useState } from "react";

import { CoolLightbox } from "./LightBox";
import Gallery from "next-gallery";
import Image from "next/image";
import { ImagesListType } from "react-spring-lightbox";
import PortraitSmile from "public/portrait-smile.png";
import PortraitSmileOutlined from "public/portrait-smile-outlined.png";
import ReactImageGallery from "react-image-gallery";

export const Portraits = () => {
  // TODO: Make responsive relative to component total size
  // TODO: Build portait gallery
  // TODO: Add clickable to open portrait gallery

  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  const imagesMockData: ImagesListType = [
    {
      src: "/portraits/analog-ladder.jpeg",
      loading: "lazy",
      alt: "",
    },
    {
      src: "/portraits/analog-serious.jpeg",
      loading: "lazy",
      alt: "",
    },
    {
      src: "/portraits/analog-sitting.jpeg",
      loading: "lazy",
      alt: "",
    },
    {
      src: "/portraits/hsm-portrait.jpeg",
      loading: "lazy",
      alt: "",
    },
    {
      src: "/portraits/portrait-brown-bg.jpeg",
      loading: "lazy",
      alt: "",
    },
    {
      src: "/portraits/smile-look-down.jpeg",
      loading: "lazy",
      alt: "",
    },
  ];

  return (
    <>
      <div
        className="absolute bottom-0 m-20 group hover:cursor-pointer"
        onClick={() => setShowOverlay(true)}
      >
        <h2 className="relative text-2xl font-thin tracking-wider text-white ">
          PORTRÄTT
        </h2>
        <div className="absolute bottom-32 w-44 rotate-[39deg] right-0 -z-10">
          <Image
            src={PortraitSmile}
            alt="Portrait of Lovisa smiling."
            className="transition-all duration-300 group-hover:-translate-y-10"
          />
        </div>
        <div className="absolute bottom-10 w-44 rotate-[-55deg] -z-10">
          <Image
            src={PortraitSmile}
            alt="Portrait of Lovisa smiling."
            className="transition-all duration-300 group-hover:-translate-y-12"
          />
        </div>
        <div className="absolute rotate-[53deg] bottom-[10%] w-44 -right-16 -z-10">
          <Image
            src={PortraitSmile}
            alt="Portrait of Lovisa smiling."
            className="transition-transform duration-300 group-hover:-translate-y-10 "
          />
        </div>
        <Image
          src={PortraitSmileOutlined}
          alt="Photo of Lovisa smiling surrounded by a white outline."
          className="w-80"
        />
      </div>
      <CoolLightbox
        images={imagesMockData}
        isOpen={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </>
  );
};
