import BilderTitle from "../../public/bilder-title.svg";
import { Film } from "./Film/Film";
import Image from "next/image";
import KingDog from "../../public/king-dog.svg";
import { Portraits } from "../../components/Portraits";
import { Scen } from "../../components/Scen";
import Script from "next/script";
import { Voice } from "../../components/Voice";
import section3 from "../../public/section-3.png";

export const MediaSection = () => (
  <div className="relative h-screen">
    <Image
      src={section3}
      alt="Background section 3"
      className="absolute object-cover w-screen h-screen -z-10"
    />
    <div className="absolute z-20 right-3 top-10 ">
      <KingDog />
    </div>

    <Scen />
    <div className="absolute z-20 -top-6 left-10">
      <BilderTitle />
    </div>
    <Portraits />
    <Voice />
    <Film />
    <Script src="https://player.vimeo.com/api/player.js"></Script>
  </div>
);
