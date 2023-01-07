import BilderTitle from "../public/bilder-title.svg";
import { Film } from "../components/Film/Film";
import FloatingHead from ".././public/floating-head.png";
import { HeadPart } from "../components/HeadPart";
import Image from "next/image";
import KingDog from "../public/king-dog.svg";
import { Kontakt } from "../components/Kontakt";
import { LipsLine } from "./LipsLine";
import LovisaImageFrame from ".././public/lovisa-image-frame.svg";
import type { NextPage } from "next";
import OutlineFace from "../public/outline-face.svg";
import { Portraits } from "../components/Portraits";
import { Presentation } from "../components/Presentation";
import { Scen } from "../components/Scen";
import Script from "next/script";
import Title from "../public/title.svg";
import { Voice } from "../components/Voice";
import diploma from ".././public/diploma.png";
import mainPortrait from "../public/main-portrait.png";
import section1 from ".././public/section-1.png";
import section3 from ".././public/section-3.png";

// TODO: Make all backgrounds proper backgrounds and not just images
// TODO: Componentize all sections
// TODO: Rework positioning to be in flex to work with mobile
// TODO: Add sanity.io CMS for everything mutable

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="relative w-full max-w-screen-2xl">
        <HeadPart />
        <div className="h-screen ">
          <Image
            src={section1}
            alt="background-section-1"
            className="absolute w-full h-screen pointer-events-none touch-none -z-10"
          />

          <div className="flex flex-col h-1/3 border-8 pt-[5vh] justify-end items-center">
            <div className="max-w-[810px] w-full mt-10">
              <Title />
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center w-full border-8 border-green-500 h-2/3 -bottom-10">
            <Image
              src={mainPortrait}
              alt="Main profile image"
              height={690}
              className="absolute bottom-0 self-center pr-4 pointer-events-none pl-11"
            />
          </div>

          <div className="absolute bottom-0 right-0 z-10 ">
            <Image
              src={"/brush.png"}
              alt="Brush"
              width={200}
              height={128}
              className="z-10 object-fill h-32"
            />
          </div>
        </div>

        <div className="relative flex flex-col">
          <div className="flex border-8 border-red-500">
            <div className="absolute top-0 right-0 z-20 hidden sm:block">
              <OutlineFace />
            </div>
          </div>
          <div className="flex justify-center">
            <Presentation />
          </div>
          {/* <div className="absolute z-20 right-80 bottom-80 ">
          <DiplomaLine />
        </div> */}
          {/* <Image
          src={diploma}
          alt="Lovisa holding her graduation diploma."
          className=" bottom-0 right-10 w-[300px]"
        /> */}
          <Image
            src={FloatingHead}
            alt="Floating head of Lovisa."
            className=" bottom-0 left-10 w-[200px]"
          />
        </div>
        <div className="relative h-screen">
          <Image
            src={section3}
            alt="Background section 3"
            className="absolute object-cover w-screen h-screen -z-10"
          />
          <div className="absolute z-20 right-3 top-10 ">
            <KingDog />
          </div>

          <Scen />
          <div className="absolute z-20 -top-6 left-10">
            <BilderTitle />
          </div>
          <Portraits />
          <Voice />
          <Film />
          <Script src="https://player.vimeo.com/api/player.js"></Script>
        </div>
        <div className="relative h-screen">
          <Image
            src={section1}
            alt="Background section 3"
            className="absolute w-screen h-screen -z-10"
          />
          <Image
            src={"/Lovisa-barock.png"}
            width={750}
            height={604}
            alt="Barock image with Lovisas head copy-pasted onto the image."
            className="absolute -top-10 left-10"
          />
          <Kontakt />
          <Image
            src={"/kejsaren-sketched.png"}
            width={230}
            height={277}
            alt="Outlined sketch of Lovisa from 'Kejsaren av Portugalien'"
            className="absolute bottom-28 left-72"
          />
          <Image
            src={"/portrait-sketched.png"}
            width={160}
            height={218}
            alt="Outlined sketch of Lovisa from 'Kejsaren av Portugalien'"
            className="absolute left-0 ml-10 bottom-24"
          />
          <Image
            src={"/dogs-group-sketched.png"}
            width={361}
            height={494}
            alt="Outlined sketch of Lovisa from 'Kejsaren av Portugalien'"
            className="absolute right-0 ml-10 bottom-24"
          />
        </div>
        <div className="relative h-screen">
          <div className="absolute left-10 -top-14 w-[685px] h-[456px]">
            <Image
              src={"/Lovisa-image-1.png"}
              alt="Photo of Lovisa"
              width={685}
              height={456}
              className="absolute w-full h-full"
            />
            <LovisaImageFrame className="absolute -top-8 -left-8" />
          </div>
          <LipsLine />
          <Image
            src={"/Lovisa-image-2.png"}
            alt="Photo of Lovisa"
            width={586}
            height={586}
            className="absolute z-30 right-2 top-14"
          />
          <div className="absolute left-28 bottom-20">
            <Image
              src={"/Lovisa-image-3.png"}
              alt="Photo of Lovisa"
              width={703}
              height={502}
            />
            <Image
              src={"/dog-outline.png"}
              width={160}
              height={192}
              alt="Sketch outline of a dog"
              className="absolute bottom-0 right-0 z-10 ml-10"
            />
          </div>
          <Image
            src={"/Lovisa-image-4.png"}
            alt="Photo of Lovisa"
            width={235}
            height={344}
            className="absolute z-30 right-48 bottom-20"
          />
          <Image
            src={"/dog-crown.png"}
            alt="Sketched outline of a dog with a crown"
            width={150}
            height={221}
            className="absolute bottom-0 z-30 right-10"
          />
          <Image
            src={"/black-paint-lines.png"}
            alt="Photo of Lovisa"
            width={236}
            height={153}
            className="absolute bottom-0 z-30 left-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
