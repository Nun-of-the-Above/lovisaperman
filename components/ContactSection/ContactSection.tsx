import BgPaper from "../../public/backgrounds/bg-paper.png";
import Image from "next/image";
import { Kontakt } from "../../components/Kontakt";

export const ContactSection = () => (
  <div className="relative">
    <Image
      src={BgPaper}
      alt="Background image of paper"
      className="absolute w-full h-full md:rotate-180 -z-10"
    />

    <div className="flex flex-col items-center p-3 md:pt-10 md:items-stretch">
      <div className="md:flex">
        <div className="relative  md:w-[748px] md:-top-24 ">
          <Image
            src={"/Lovisa-face-barock.png"}
            width={300}
            height={300}
            alt="Barock image with Lovisas head copy-pasted onto the image."
            className="absolute left-[35.5%] w-[27%] top-[12%] animate-spin-slow"
          />
          <Image
            src={"/barock-woman.png"}
            width={300}
            height={604}
            alt="Barock image with Lovisas head copy-pasted onto the image."
            className="w-full"
          />
        </div>

        <Kontakt />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center justify-between m-3 md:w-full md:mr-10">
          <Image
            src={"/portrait-sketched.png"}
            width={160}
            height={218}
            alt="Outlined sketch of Lovisa from 'Kejsaren av Portugalien'"
            className="w-1/2 md:w-1/3"
          />
          <Image
            src={"/kejsaren-sketched.png"}
            width={230}
            height={277}
            alt="Outlined sketch of Lovisa from 'Kejsaren av Portugalien'"
            className="w-1/2 md:w-1/3 "
          />
          <Image
            src={"/dogs-group-sketched.png"}
            width={361}
            height={494}
            alt="Outlined sketch of Lovisa from 'Kejsaren av Portugalien'"
            className="hidden md:block md:h-fit md:w-1/3"
          />
        </div>
      </div>
    </div>
  </div>
);
