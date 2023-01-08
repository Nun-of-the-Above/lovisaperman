import { CoolLightbox } from "./CoolLightbox";
import Image from "next/image";
import { scenMockData } from "./scenMockData";
import { useState } from "react";

export const Scen = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  return (
    <>
      <div
        className="transition-all hover:cursor-pointer hover:border-red-500 hover:stroke-lime-300"
        onClick={() => setShowOverlay(true)}
      >
        <Image
          src={"/scen-title.svg"}
          alt="Bilder & Media"
          width={300}
          height={300}
          className="w-full"
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
