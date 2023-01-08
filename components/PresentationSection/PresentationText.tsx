import DiplomaLine from "../public/diploma-line.svg";
import FloatingHead from "../../public/floating-head.png";
import Image from "next/image";
import RevetLogo from "../../public/revet-logo.svg";

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
      <div className="pt-10 pr-4 font-sans pl-14 pb-28">
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