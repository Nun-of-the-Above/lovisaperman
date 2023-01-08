import Image from "next/image";
import Title from "../../public/title.svg";
import mainPortrait from "../../public/main-portrait.png";
import section1 from "../../public/section-1.png";

export const LandingSection = () => (
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
);
