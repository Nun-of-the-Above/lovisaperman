import Image from "next/image";
import Link from "next/link";

import FloatingHead from "../../public/floating-head.png";

export const PresentationText = () => (
  <div className="flex items-center justify-center w-fit">
    <div className="relative text-sm md:text-xl max-w-[821px] ">
      <Image
        src="/paragraph-bg.png"
        width={1006}
        height={746}
        alt="Background"
        className="absolute h-full opacity-50 -z-10"
      />
      <div className="relative pt-10 pr-4 font-sans pl-14 pb-28">
        <>
          <FloatingHeadBullet />
          Jag heter Lovisa Perman, nyexaminerad skådespelare från Högskolan för scen och musik. I höst spelar jag i föreställningen <Link className="underline"  target='_blank' href="https://www.regionteatervast.se/forestallningar/vaerlden-sa-ja/">Världen sa ja</Link> av Huy Le Vo på Regionteater Väst.
          <br />
          <br />
        </>
        <>
          <FloatingHeadBullet />
          Jag trivs med att arbeta fysiskt, gärna genreöverskridande,
          tvärkonstnärligt och gladeligen med sång och dans. Jag tycker om att
          samskapa med teknik och rum, är förtjust i ensemblearbetet och att
          laborera i publikmötet.
          <br />
          <br />
        </>
        <>
          <FloatingHeadBullet /> Utöver skådespelarutbildningen har jag en
          läkarexamen och en kandidatexamen i teatervetenskap från Sahlgrenska
          akademin respektive Teaterhögskolan i Malmö.
          <br /> Jag är också rätt vass på att sjunga och jag drömmer om att en
          dag få spela Gavroche i Les Mis.
          <br />
        </>
        <br />
        <>
          <FloatingHeadBullet />
          Sedan 2015 driver jag en frigrupp som heter
          <Image
            src="/revet-logo.svg"
            width={60}
            height={40}
            alt="Revet scenkonsts logga"
            className="inline w-10 mx-1 sm:w-16 md:mx-2"
          />
          scenkonst . För att kolla in våra produktioner finns hemsida{" "}
          <a
            className="underline hover:cursor-pointer"
            target="_blank"
            rel="noreferrer"
            href={"https://revetscenkonst.se"}
          >
            här
          </a>
          .
          <br />
        </>
        <br />
        {/* <div className="relative overflow-visible align-bottom border border-green-500 ">
          <div className="relative">
            <Image
              src="/hashtag.svg"
              width={200}
              height={60}
              alt=""
              className="absolute bottom-0 left-0 text-base align-bottom border-4 border-red-500 w-72 h-28"
            />{" "}
          </div>
        </div> */}
        {/* Våren 2023 spelade min klass Sånger vid randen av ett grått hav av Pipsa
        Lonka i regi av Peter Elmers. Tack till alla som kom och tittade.
        <br /> */}
      </div>
    </div>
  </div>
);

const FloatingHeadBullet = () => (
  <div className="absolute">
    <Image
      src={FloatingHead}
      alt="Floating head of Lovisa."
      className="relative w-16 h-16 rotate-45 -left-16"
    />{" "}
  </div>
);
