import { CoolLightbox } from "./CoolLightbox";
import Image from "next/image";
import { ImagesListType } from "react-spring-lightbox";
import KontaktLabel from "../public/kontakt-label.png";
import { useDisableScroll } from "./MediaSection/Film/useDisableScroll";
import { useState } from "react";

export const Kontakt = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  useDisableScroll(showOverlay);

  const cvImage: ImagesListType = [
    {
      src: "/CV.png",
      loading: "lazy",
      alt: "",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center">
        <Image src={KontaktLabel} alt="Kontakt" className="my-3" />
        <EmailAndWebsite />
        <Image
          src={"/cv-label.svg"}
          width={150}
          height={80}
          alt="Kontakt"
          className="mt-5 md:hover:cursor-pointer"
          onClick={() => setShowOverlay(true)}
        />
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
  <div className="flex gap-3 ">
    <div className="flex flex-col items-end">
      <div>epost</div>
      <div>hemsida</div>
    </div>
    <div className="flex flex-col items-start">
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
