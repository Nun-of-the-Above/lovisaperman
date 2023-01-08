import Image from "next/image";
import { Kontakt } from "../../components/Kontakt";
import section1 from "../../public/section-1.png";

export const ContactSection = () => (
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
);
