import Image from "next/image";
import { LipsLine } from "../LipsLine";
import LovisaImageFrame from "../../public/lovisa-image-frame.svg";

export const ImagesSection = () => (
  <div className="relative h-screen">
    <div className="absolute left-10 -top-14 w-[685px] h-[456px]">
      <Image
        src={"/Lovisa-image-1.png"}
        alt="Photo of Lovisa"
        width={685}
        height={456}
        className="absolute w-full h-full"
      />
      <LovisaImageFrame className="absolute -top-8 -left-8" />
    </div>
    <LipsLine />
    <Image
      src={"/Lovisa-image-2.png"}
      alt="Photo of Lovisa"
      width={586}
      height={586}
      className="absolute z-30 right-2 top-14"
    />
    <div className="absolute left-28 bottom-20">
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
        className="absolute bottom-0 right-0 z-10 ml-10"
      />
    </div>
    <Image
      src={"/Lovisa-image-4.png"}
      alt="Photo of Lovisa"
      width={235}
      height={344}
      className="absolute z-30 right-48 bottom-20"
    />
    <Image
      src={"/dog-crown.png"}
      alt="Sketched outline of a dog with a crown"
      width={150}
      height={221}
      className="absolute bottom-0 z-30 right-10"
    />
    <Image
      src={"/black-paint-lines.png"}
      alt="Photo of Lovisa"
      width={236}
      height={153}
      className="absolute bottom-0 z-30 left-10"
    />
  </div>
);
