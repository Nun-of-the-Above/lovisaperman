import BgPaper from "../../public/backgrounds/bg-paper.png";
import Image from "next/image";
import Title from "../../public/title.svg";
import mainPortrait from "../../public/main-portrait.png";

export const LandingSection = () => (
  <div className="relative h-screen max-h-section">
    <Image
      src={BgPaper}
      alt="Background image of paper"
      className="absolute w-full h-screen pointer-events-none max-h-section touch-none -z-10 "
    />

    <div className="flex flex-col pt-[5vh] justify-end items-center">
      <div className="max-w-[810px] w-full mt-10 px-5">
        <Title />
      </div>
    </div>
    <div className="relative flex flex-col items-center justify-center w-full h-2/3 -bottom-10">
      <Image
        src={mainPortrait}
        alt="Main profile image"
        height={690}
        className="absolute self-center pl-4 pr-4 pointer-events-none -bottom-5"
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
);
