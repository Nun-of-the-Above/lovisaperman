import BgRed from "../../public/backgrounds/bg-red.png";
import { Film } from "./Film/Film";
import Image from "next/image";
import { Portraits } from "../../components/Portraits";
import { Scen } from "../../components/Scen";
import Script from "next/script";
import { Voice } from "../../components/Voice";

export const MediaSection = () => (
  <div className="relative flex flex-col h-fit ">
    <Image
      src={BgRed}
      alt="Background image red"
      className="absolute w-screen h-full pointer-events-none -z-10"
    />
    <div className="">
      <div className="flex flex-col items-start md:flex-row">
        <div className="relative z-20 order-first pr-32 m-2 md:m-0 md:ml-10">
          <Image
            src={"/bilder-title.svg"}
            alt="Bilder & Media"
            width={300}
            height={300}
            className="relative w-full -top-5"
          />
        </div>
        <div className="order-3 md:order-none z-20 mx-3  md:-left-[4vw] md:-top-[10vw] shrink md:m-0 ">
          <div className="h-auto -mt-12">
            <Scen />
          </div>
        </div>
        <div className="absolute w-[25vw] md:w-44  top-0 right-0 z-20 flex-shrink order-2 md:relative md:order-none justify-self-end w-fits">
          <Image
            src={"/king-dog.svg"}
            width="100"
            height="100"
            alt="Sketched dog with a crown"
            className="relative right-0 w-full top-3"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between mx-5 ">
        <div className="mx-10 md:flex-[3]">
          <Portraits />
        </div>
        <div className="flex justify-between gap-4 mt-4 md:m-0 md:block">
          <div className="md:flex-[2] w-50% md:w-full flex flex-col items-center">
            <Voice />
          </div>
          <div className="relative md:flex-[3] w-50% md:w-full flex flex-col items-center gap-4 ">
            <Film />
          </div>
        </div>
      </div>
    </div>
    <Script src="https://player.vimeo.com/api/player.js"></Script>
  </div>
);
