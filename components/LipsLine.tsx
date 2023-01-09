import Image from "next/image";

export const LipsLine = () => (
  <div className="flex items-center justify-center gap-3 overflow-hidden">
    <Lips />
    <Lips />
    <Lips />
    <Lips />
    <Lips />
    <Lips />
    <Lips />
    <Lips />
  </div>
);

const Lips = () => (
  <Image
    src="/lips.png"
    alt="Lovisa's lips cut out"
    height={69}
    width={40.8}
    className="flex-1"
  />
);
