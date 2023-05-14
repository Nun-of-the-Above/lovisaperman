import BgPaper from "../../public/backgrounds/bg-paper.png";
import Image from "next/image";
import { Kontakt } from "../../components/Kontakt";

export const ContactSection = () => (
  <div className="relative">
    <Image
      src={BgPaper}
      alt="Background image of paper"
      className="absolute -z-10 h-full w-full md:rotate-180"
    />

    <div className="flex flex-col items-center p-3 md:items-stretch md:pt-10">
      <div className="md:flex">
        <div className="relative  md:-top-24 md:w-[748px] ">
          <Image
            src={"/Lovisa-face-barock.png"}
            width={300}
            height={300}
            alt="Barock image with Lovisas head copy-pasted onto the image."
            className="absolute left-[35.5%] top-[12%] w-[27%] animate-spin-slow"
          />
          <Image
            src={"/barock-woman.webp"}
            width={300}
            height={604}
            alt="Barock image with Lovisas head copy-pasted onto the image."
            className="w-full"
          />
        </div>

        <Kontakt />
      </div>
      <div className="-mt-28 flex flex-col md:flex-row">
        <div className="m-3 flex items-center justify-between md:mr-10 md:w-full">
          <Image
            src={"/portrait-sketched.png"}
            width={160}
            height={218}
            alt="Outlined sketch of Lovisa from 'Kejsaren av Portugalien'"
            className="w-1/4 md:w-1/6"
          />
          <Image
            src={"/kejsaren-sketched.png"}
            width={230}
            height={277}
            alt="Outlined sketch of Lovisa from 'Kejsaren av Portugalien'"
            className="w-1/3 md:w-1/5"
          />
          <Image
            src={"/dogs-group-sketched.png"}
            width={361}
            height={494}
            alt="Outlined sketch of Lovisa from 'Kejsaren av Portugalien'"
            className="absolute -bottom-[30%] right-0 z-10 hidden w-1/3 md:static md:block md:h-fit md:w-1/4"
          />
        </div>
      </div>
    </div>
  </div>
);
