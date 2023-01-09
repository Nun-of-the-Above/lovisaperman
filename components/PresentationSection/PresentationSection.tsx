import Image from "next/image";
import OmMig from "../../public/omMig.svg";
import { PresentationText } from "./PresentationText";

export const PresentationSection = () => (
  <div className="relative flex flex-col max-h-fit">
    <div className="flex flex-col justify-center ">
      <div className="flex flex-col justify-between sm:max-h-max ">
        <Image
          src={"/outline-face.png"}
          alt="Outline of a face"
          width={200}
          height={200}
          className="absolute top-0 right-0 z-20 w-[150px]"
        />
      </div>
      <div className="relative self-center mx-10 md:self-auto w-fit md:ml-24">
        <div className="relative z-20 mt-10 animate-slow-bounce w-80 sm:w-96 -left-12 sm:-left-24">
          <OmMig />
        </div>
        <Image
          src="/diploma-line.svg"
          alt=""
          width={200}
          height={150}
          className="hidden desktop:block absolute top-[39%] left-[55%] w-[580px]"
        />
        <PresentationText />
      </div>
    </div>

    <div className="relative items-end justify-between hidden w-full md:flex ">
      <Image
        src={"/floating-head.png"}
        alt="Floating head of Lovisa."
        width={300}
        height={200}
        className="relative bottom-0 h-full -m-10 w-30"
      />
      <Image
        src={"/diploma.png"}
        alt="Lovisa holding her graduation diploma."
        width={400}
        height={400}
        className="absolute right-0"
      />
    </div>
  </div>
);
