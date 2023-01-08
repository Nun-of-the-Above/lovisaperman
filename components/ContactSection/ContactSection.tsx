import BgPaper from "../../public/backgrounds/bg-paper.png";
import Image from "next/image";
import { Kontakt } from "../../components/Kontakt";

export const ContactSection = () => (
  <div className="relative">
    <Image
      src={BgPaper}
      alt="Background image of paper"
      className="absolute h-full -z-10"
    />

    <div className="flex flex-col items-center p-3">
      <div className="relative">
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
      <div className="flex flex-col ">
        <div className="flex items-center justify-between m-3">
          <Image
            src={"/portrait-sketched.png"}
            width={160}
            height={218}
            alt="Outlined sketch of Lovisa from 'Kejsaren av Portugalien'"
            className="w-1/2 "
          />
          <Image
            src={"/kejsaren-sketched.png"}
            width={230}
            height={277}
            alt="Outlined sketch of Lovisa from 'Kejsaren av Portugalien'"
            className="w-1/2 "
          />
        </div>
        <Image
          src={"/dogs-group-sketched.png"}
          width={361}
          height={494}
          alt="Outlined sketch of Lovisa from 'Kejsaren av Portugalien'"
          className="hidden md:block "
        />
      </div>
    </div>
  </div>
);
