import DiplomaLine from "../public/diploma-line.svg";
import FloatingHead from ".././public/floating-head.png";
import Image from "next/image";
import OmMig from "../public/omMig.svg";
import RevetLogo from "../public/revet-logo.svg";

export const Presentation = () => (
  <div className="relative mx-10 w-fit">
    <div className="relative z-20 mt-10 animate-slow-bounce w-96 -left-20">
      <OmMig />
    </div>
    <div className="flex items-center justify-center border-4 border-violet-500 w-fit">
      <Image
        src="/paragraph-bg.png"
        width={1006}
        height={746}
        alt="Background"
        className="absolute w-full h-full mt-10 opacity-50 -z-10"
      />
      <div className="px-16 pb-20 font-sans text-xl max-w-[821px]">
        Jag heter Lovisa Perman. <br />
        <FloatingHeadBullet />
        Just nu läser jag skådespelarprogrammet på Högskolan för scen och musik
        i Göteborg och tar examen i juni 2023.
        <br />
        <br />
        <FloatingHeadBullet /> Utöver skådespelarutbildningen har jag en
        läkarexamen och en kandidatexamen i teatervetenskap från Sahlgrenska
        akademin respektive Teaterhögskolan i Malmö.
        <br /> Jag är också rätt vass på att sjunga och jag drömmer om att en
        dag få spela Gavroche i Les Mis.
        <br />
        <br />
        <FloatingHeadBullet />
        Sedan 2015 driver jag en frigrupp som heter
        <RevetLogo className="inline mx-3 w" />
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
        <br />
        <FloatingHeadBullet />
        Våren 2022 spelar min klass Sånger vid randen av ett grått hav av Pipsa
        Lonka i regi av Peter Elmers med premiär 10e Mars på Andra Stället i
        Angered
        <br />
        Kom gärna och titta!
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
