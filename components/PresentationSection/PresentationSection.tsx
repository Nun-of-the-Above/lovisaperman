import FloatingHead from "../../public/floating-head.png";
import Image from "next/image";
import OutlineFace from "../../public/outline-face.svg";
import { Presentation } from "../Presentation";

export const PresentationSection = () => (
  <div className="relative flex flex-col">
    <div className="flex border-8 border-red-500">
      <div className="absolute top-0 right-0 z-20 hidden sm:block">
        <OutlineFace />
      </div>
    </div>
    <div className="flex justify-center">
      <Presentation />
    </div>
    {/* <div className="absolute z-20 right-80 bottom-80 ">
<DiplomaLine />
</div> */}
    {/* <Image
src={diploma}
alt="Lovisa holding her graduation diploma."
className=" bottom-0 right-10 w-[300px]"
/> */}
    <Image
      src={FloatingHead}
      alt="Floating head of Lovisa."
      className=" bottom-0 left-10 w-[200px]"
    />
  </div>
);
