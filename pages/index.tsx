import type { NextPage } from "next";
import Image from "next/image";
import Title from "../public/title.svg";
import OmMig from "../public/omMig.svg";
import OutlineFace from "../public/outline-face.svg";
import DiplomaLine from "../public/diploma-line.svg";
import KingDog from "../public/king-dog.svg";
import ScenTitle from "../public/scen-title.svg";
import BilderTitle from "../public/bilder-title.svg";
import mainPortrait from "../public/main-portrait.png";
import section1 from ".././public/section-1.png";
import section3 from ".././public/section-3.png";
import FloatingHead from ".././public/floating-head.png";
import diploma from ".././public/diploma.png";
import { HeadPart } from "../components/HeadPart";
import { Portraits } from "../components/Portraits";
import { Voice } from "../components/Voice";

const Home: NextPage = () => {
  return (
    <>
      <HeadPart />
      <div className="h-screen">
        <Image
          src={section1}
          alt="background-section-1"
          className="absolute object-cover h-screen -z-10"
        />

        <div className="flex items-end justify-center pt-[5vh] ">
          <div className=" w-[810px] mx-10">
            <Title />
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-center w-full h-2/3">
          <Image
            src={mainPortrait}
            alt="Main profile image"
            className="absolute top-4 pl-20 object-contain h-[690px] pr-4"
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
      <div className="relative h-screen">
        <div className="absolute z-20 w-[570px]">
          <OmMig />
        </div>
        <div className="absolute top-0 right-0 z-20 ">
          <OutlineFace />
        </div>
        <div className="absolute z-20 right-80 bottom-80 ">
          <DiplomaLine />
        </div>
        <Image
          src={diploma}
          alt="Lovisa holding her graduation diploma."
          className="absolute bottom-0 right-10 w-[300px]"
        />
        <Image
          src={FloatingHead}
          alt="Floating head of Lovisa."
          className="absolute bottom-0 left-10 w-[200px]"
        />
        <div className="absolute w-1/2 border border-blue-400 top-60 left-52 h-1/2">
          <div>
            <p>
              Jag heter Lovisa Perman. <br />
              Just nu läser jag skådespelarprogrammet på Högskolan för scen och
              musik i Göteborg och tar examen i juni 2022.
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-screen">
        <Image
          src={section3}
          alt="Background section 3"
          className="absolute object-cover h-screen -z-10"
        />
        <div className="absolute z-20 right-3 top-10 ">
          <KingDog />
        </div>
        <div className="absolute z-20 -top-40 left-[40%]">
          <ScenTitle />
        </div>
        <div className="absolute z-20 -top-6 left-10">
          <BilderTitle />
        </div>
        <Portraits className="absolute bottom-20 left-20 w-96" />
        <Voice />
      </div>
    </>
  );
};

export default Home;
