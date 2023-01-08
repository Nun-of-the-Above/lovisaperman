import Image from "next/image";
import { LipsLine } from "../LipsLine";

export const ImagesSection = () => (
  <div className="flex flex-col items-center min-h-fit">
    <div className="relative -top-[3vw]">
      <LipsLine />
    </div>
    <div className="relative flex w-fit p-[5vw] ">
      <Image
        src={"/Lovisa-image-1.png"}
        alt="Photo of Lovisa"
        width={685}
        height={456}
        className="w-full "
      />
      <Image
        src={"/lovisa-image-frame.svg"}
        alt="Frame for photo of Lovisa"
        width={685}
        height={456}
        className="absolute top-0 w-full "
      />
    </div>
    <div className="relative m-3">
      <Image
        src={"/black-paint-lines.png"}
        alt="Photo of Lovisa"
        width={236}
        height={153}
        className="absolute -bottom-[10%] -left-[5%] z-30 w-[30%]"
      />
      <Image
        src={"/Lovisa-image-3.png"}
        alt="Photo of Lovisa"
        width={703}
        height={502}
      />
      <Image
        src={"/dog-outline.png"}
        width={160}
        height={192}
        alt="Sketch outline of a dog"
        className="absolute bottom-0 right-0 z-10 w-[25%]"
      />
    </div>
    <Image
      src={"/Lovisa-image-2.png"}
      alt="Photo of Lovisa"
      width={586}
      height={586}
      className="z-30 pt-5 pl-16 pr-10"
    />
    <div className="relative flex items-end mx-5 mb-5 -mt-[15vw]">
      <Image
        src={"/Lovisa-image-4.png"}
        alt="Photo of Lovisa"
        width={235}
        height={344}
        className="z-30 w-2/3 "
      />
      <Image
        src={"/dog-crown.png"}
        alt="Sketched outline of a dog with a crown"
        width={150}
        height={221}
        className="z-30 w-1/3 "
      />
    </div>
  </div>
);
