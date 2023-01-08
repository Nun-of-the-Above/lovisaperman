import Image from "next/image";

export const LipsLine = () => (
  <div className="absolute right-0 flex gap-3 -top-3">
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
  <Image src="/lips.png" alt="Lovisa's lips cut out" height={69} width={40.8} />
);
