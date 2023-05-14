import Image from "next/image";
import clsx from "clsx";

export const LipsLine = ({ className }: { className?: string }) => (
  <div
    className={clsx("flex h-fit flex-1 items-center justify-center", className)}
  >
    <Lips />
    <Lips />
    <Lips />
    <Lips className="-rotate-12" />
    <Lips className="mx-1 mt-1" />
    <Lips className="mx-1" />
    <Lips className="mx-1 mt-1 rotate-3" />
    <Lips className="mx-2" />
  </div>
);

const Lips = ({ className }: { className?: string }) => (
  <Image
    src="/lips.png"
    alt="Lovisa's lips cut out"
    height={69}
    width={40.8}
    className={clsx("flex-1", className)}
  />
);
