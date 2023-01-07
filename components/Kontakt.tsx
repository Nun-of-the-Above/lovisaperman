import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";

import CVImage from "../public/CV.png";
import Image from "next/image";
import KontaktLabel from "../public/kontakt-label.png";
import { useDisableScroll } from "./Film/useDisableScroll";

export const Kontakt = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  useDisableScroll(showOverlay);

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  }, []);

  function onDocumentLoadSuccess({ numPages }: { [key: string]: number }) {
    setNumPages(numPages);
  }
  return (
    <>
      <div className="absolute top-32 right-32">
        <Image
          src={KontaktLabel}
          width={410}
          height={115}
          alt="Kontakt"
          className="relative -left-28"
        />
        <EpostLabel />
        <br />
        <HemsidaLabel />
        <Image
          src={"/cv-label.svg"}
          width={150}
          height={80}
          alt="Kontakt"
          className="absolute mt-5 hover:cursor-pointer"
          onClick={() => setShowOverlay(true)}
        />
      </div>
      {/* TODO: Add ligthbox with zoom to CV preview. */}
      {showOverlay && (
        <div className="fixed top-0 z-40 flex flex-col items-center justify-center w-screen h-screen">
          <Image
            src={CVImage}
            alt="Image of CV"
            className="z-50 h-full mx-10 mt-6 w-fit"
          />

          <a
            href="/CV-Lovisa-Perman.pdf"
            download
            className="m-10 text-slate-800 bg-wax-flower-300 hover:bg-wax-flower-400  focus:ring-4 focus:ring-wax-flower-500 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none   z-50 flex gap-2 items-center justify-center"
          >
            Ladda ner CV{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
              />
            </svg>
          </a>

          <div
            className="absolute z-30 w-screen h-screen bg-black opacity-80"
            onClick={() => setShowOverlay(false)}
          ></div>
        </div>
      )}
    </>
  );
};

const EpostLabel = () => (
  <span className="flex gap-1">
    epost{" "}
    <a
      target="_blank"
      rel="noreferrer"
      href={"mailto:lovisa.perman@gmail.com"}
      className="flex items-center gap-1 hover:cursor-pointer hover:underline"
    >
      lovisa.perman@gmail.com
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-5 h-5 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </a>
  </span>
);

const HemsidaLabel = () => (
  <span className="flex gap-1">
    hemsida{" "}
    <a
      href="https://lovisaperman.se"
      className="flex items-center gap-1 hover:cursor-pointer hover:underline"
    >
      www.lovisaperman.se
    </a>
  </span>
);
