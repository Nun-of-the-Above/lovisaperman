import Image from "next/image";

export const Portraits = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  // TODO: Add image transistions on hover.
  // TODO: Make responsive relative to component total size

  return (
    <div className={className}>
      <h2 className="absolute text-2xl font-thin tracking-wider text-white top-16 -left-14 ">
        PORTRÄTT
      </h2>
      <Image
        src={"/portrait-smile.png"}
        alt="Portrait of Lovisa smiling."
        width={160}
        height={160}
        className="absolute bottom-28 w-40 rotate-[39deg] right-24 -z-10"
      />
      <Image
        src={"/portrait-smile.png"}
        alt="Portrait of Lovisa smiling."
        width={160}
        height={160}
        className="absolute bottom-10 w-44 rotate-[-55deg] -left-16 -z-10"
      />
      <Image
        src={"/portrait-smile.png"}
        alt="Portrait of Lovisa smiling."
        width={160}
        height={160}
        className="absolute bottom-8 w-48 rotate-[53deg] right-0 -z-10"
      />
      <Image
        src={"/portrait-smiling.png"}
        alt="Portrait of Lovisa smiling."
        width={160}
        height={160}
        className="w-80"
      />
    </div>
  );
};
