import { useRef, useState } from "react";

import { CoolLightbox } from "./CoolLightbox";
import Image from "next/image";
import PortraitSmile from "public/portrait-smile.png";
import PortraitSmileOutlined from "public/portrait-smile-outlined.png";
import { imagesMockData } from "./imagesMockData";

export const Portraits = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  return (
    <div className="flex justify-center ">
      <div
        className="relative -mt-10 md:-mt-0 group hover:md:cursor-pointer w-fit md:w-96"
        onClick={() => setShowOverlay(true)}
      >
        <h2 className="relative text-2xl font-thin text-white top-[20vw] md:top-28 -left-14 md:-left-6">
          PORTRÄTT
        </h2>
        <div className="absolute w-[50%] bottom-[25%] rotate-[39deg] right-[5%] -z-10">
          <Image
            src={PortraitSmile}
            alt="Portrait of Lovisa smiling."
            className="transition-all duration-300 animate-gentle-bounce md:animate-none group-hover:-translate-y-[10%]"
          />
        </div>
        <div className="absolute w-[50%] bottom-[17%] -left-[5%] rotate-[-55deg] -z-10">
          <Image
            src={PortraitSmile}
            alt="Portrait of Lovisa smiling."
            className="transition-all duration-300 animate-gentle-bounce md:animate-none group-hover:-translate-y-[10%]"
          />
        </div>
        <div className="absolute w-[50%] rotate-[53deg]  bottom-[12%] -right-[10%] -z-10   ">
          <Image
            src={PortraitSmile}
            alt="Portrait of Lovisa smiling."
            className="transition-transform duration-300 animate-gentle-bounce md:animate-none group-hover:-translate-y-[10%] "
          />
        </div>
        <Image
          src={PortraitSmileOutlined}
          alt="Photo of Lovisa smiling surrounded by a white outline."
          className="pointer-events-none "
        />
      </div>
      <CoolLightbox
        images={imagesMockData}
        isOpen={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </div>
  );
};
