import Image from "next/image";
import { LipsLine } from "../LipsLine";

export const ImagesSection = () => (
  <div className="relative flex min-h-fit flex-col items-center  md:items-stretch">
    <div className="relative flex w-full flex-1">
      <div className="relative -mt-14 h-fit w-1/2 p-[5vw] md:p-5">
        <Image
          src={"/Lovisa-image-1.webp"}
          alt="Photo of Lovisa"
          width={685}
          height={456}
          className="w-full"
        />
        <Image
          src={"/lovisa-image-frame.svg"}
          alt="Frame for photo of Lovisa"
          width={685}
          height={456}
          className="absolute -top-1 -left-1 w-full "
        />
      </div>
      <LipsLine className="-mt-4" />
      <Image
        src={"/Lovisa-image-2.webp"}
        alt="Photo of Lovisa"
        width={586}
        height={586}
        className="absolute right-0 top-[2vw] z-30 mr-[3vw] mt-5 w-[45vw] max-w-2xl"
      />
    </div>
    <div className="relative mt-[20vw] ml-14 mb-[8vw] sm:mt-0 md:h-fit md:w-[50vw]">
      <Image
        src={"/Lovisa-image-3.webp"}
        alt="Photo of Lovisa"
        width={703}
        height={502}
      />
      <Image
        src={"/black-paint-lines.png"}
        alt="Photo of Lovisa"
        width={236}
        height={153}
        className="absolute -bottom-[10%] -left-[5%] z-30 w-[30%]"
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
      src={"/Lovisa-image-4.webp"}
      alt="Photo of Lovisa"
      width={235}
      height={344}
      className="absolute bottom-0 right-[22vw] w-[16vw]"
    />
    <Image
      src={"/dog-crown.png"}
      alt="Sketched outline of a dog with a crown"
      width={150}
      height={221}
      className="absolute bottom-0 right-0 z-30 w-[13vw]"
    />
  </div>
);
