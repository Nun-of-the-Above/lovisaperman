import FloatingHead from "../../public/floating-head.png";
import Image from "next/image";
import OmMig from "../../public/omMig.svg";
import OutlineFace from "../../public/outlineFace.png";
import { PresentationText } from "./PresentationText";

export const PresentationSection = () => (
  <div className="relative flex flex-col max-h-fit">
    <div className="flex flex-col justify-center ">
      <div className="flex flex-col justify-between sm:max-h-max">
        <Image
          src={OutlineFace}
          alt="Outline of a face"
          width={200}
          height={200}
          className="absolute top-0 right-0 z-20 w-[150px]"
        />
      </div>
      <div className="relative self-center mx-10 w-fit">
        <div className="relative z-20 mt-10 animate-slow-bounce w-80 sm:w-96 -left-12 sm:-left-24">
          <OmMig />
        </div>
        <PresentationText />
      </div>
    </div>
    {/* <div className="absolute z-20 right-80 bottom-80 ">
      <DiplomaLine />
    </div> */}
    <div className="items-center justify-between hidden w-screen md:flex ">
      <Image
        src={"/floating-head.png"}
        alt="Floating head of Lovisa."
        width={300}
        height={200}
        className="w-1/2 h-full -m-10 border-4 border-yellow-500 "
      />
      <Image
        src={"/diploma.png"}
        alt="Lovisa holding her graduation diploma."
        width={400}
        height={400}
        className="w-1/2 h-full -mt-20 border-4 border-red-500"
      />
    </div>
  </div>
);
