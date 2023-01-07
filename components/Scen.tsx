import { CoolLightbox } from "./LightBox";
import ScenTitle from "../public/scen-title.svg";
import { scenMockData } from "./scenMockData";
import { useState } from "react";

export const Scen = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  return (
    <>
      <div
        className="absolute z-20 -top-40 left-[40%] hover:cursor-pointer hover:border-red-500 hover:stroke-lime-300 transition-all"
        onClick={() => setShowOverlay(true)}
      >
        <ScenTitle />
      </div>
      <CoolLightbox
        images={scenMockData}
        isOpen={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </>
  );
};
