import { useEffect, useState } from "react";

import { CoolLightbox } from "./CoolLightbox";
import CvLines from "../public/cv-lines.png";
import Image from "next/image";
import { ImagesListType } from "react-spring-lightbox";
import KontaktLabel from "../public/kontakt-label.png";
import clsx from "clsx";
import { useDisableScroll } from "./MediaSection/Film/useDisableScroll";

export const Kontakt = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  useDisableScroll(showOverlay);
  const [showCVLines, setShowCVLines] = useState(false);

  const cvImage: ImagesListType = [
    {
      src: "/CV.png",
      loading: "eager",
      alt: "",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCVLines((prev) => !prev);
    }, 750);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center ">
        <Image
          src={KontaktLabel}
          alt="Kontakt"
          className="my-3 md:w-[413px] md:pt-14 md:relative md:-left-24"
        />
        <EmailAndWebsite />
        <div
          className={clsx(
            "flex items-center ml-10 -mt-12 justify-center w-fit relative p-14 sm:hover:cursor-pointer"
          )}
          onClick={() => setShowOverlay(true)}
        >
          <Image
            src={CvLines}
            width="300"
            height="200"
            alt=""
            className={clsx(
              "absolute w-full h-full",
              showCVLines && "rotate-12"
            )}
          />
          <Image
            src={"/cv-label.png"}
            width={150}
            height={80}
            alt="CV-länk"
            className="p-8 mr-5 w-52 text-[10vw] font-moonlight tracking-widest"
          />
        </div>
      </div>
      <CoolLightbox
        images={cvImage}
        isOpen={showOverlay}
        setShowOverlay={setShowOverlay}
        downloadButton
        singleClickZoom
      />
    </>
  );
};

const EmailAndWebsite = () => (
  <div className="flex gap-3 md:-ml-10 md:text-xl">
    <div className="flex flex-col items-end gap-5">
      <div>epost</div>
      <div>hemsida</div>
      <div>CV</div>
    </div>
    <div className="flex flex-col items-start gap-5">
      <a
        target="_blank"
        rel="noreferrer"
        href={"mailto:lovisa.perman@gmail.com"}
        className="flex items-center gap-1 w-fit hover:cursor-pointer hover:underline"
      >
        lovisa.perman@gmail.com
        <OpenInNewTabIcon />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://lovisaperman.se"
        className="flex items-center gap-1 hover:cursor-pointer hover:md:underline"
      >
        www.lovisaperman.se
        <OpenInNewTabIcon />
      </a>
    </div>
  </div>
);

const OpenInNewTabIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5 stroke-[1.5]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);
