import BgPaper from "../../public/backgrounds/bg-paper.png";
import Image from "next/image";
import Title from "../../public/title.svg";
import mainPortrait from "../../public/main-portrait.webp";

export const LandingSection = () => (
  <div className="relative h-screen max-h-section">
    <Image
      src={BgPaper}
      alt="Background image of paper"
      priority
      className="pointer-events-none absolute -z-10 h-screen max-h-section w-full touch-none"
    />

    <div className="flex flex-col items-center justify-end pt-[5vh]">
      <div className="mt-10 w-full max-w-[810px] px-5">
        <Title />
      </div>
    </div>
    <div className="relative -bottom-10 flex h-2/3 w-full flex-col items-center justify-center">
      <Image
        src={mainPortrait}
        alt="Main profile image"
        height={690}
        priority
        className="pointer-events-none absolute -bottom-5 self-center pl-4 pr-4"
      />
    </div>

    <div className="absolute bottom-0 right-0 z-10 ">
      <Image
        src={"/brush.png"}
        alt="Brush"
        width={200}
        height={128}
        className="z-10 h-32 object-fill"
      />
    </div>
  </div>
);
