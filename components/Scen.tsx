import { CoolLightbox } from "./CoolLightbox";
import Image from "next/image";
import ScenSvg from "../public/scen-title.svg";
import { scenMockData } from "./scenMockData";
import { useState } from "react";

export const Scen = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  return (
    <>
      <div className="" onClick={() => setShowOverlay(true)}>
        <ScenSvg className="hidden w-1/2 overflow-visible transition-all md:w-full hover:stroke-lime-300 hover:cursor-pointer md:block" />
        <Image
          src={"/scen-title.svg"}
          alt="Scen"
          width={300}
          height={300}
          className="w-full md:hidden"
        />
      </div>
      <CoolLightbox
        images={scenMockData}
        isOpen={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </>
  );
};
