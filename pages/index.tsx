import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Title from "./title.svg";
import mainPortrait from ".././public/main-portrait.png";
import section1 from ".././public/section-1.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lovisa Perman - Skådespelare</title>
        <meta name="description" content="Lovisa Perman - Skådespelare" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={section1}
        alt="background-section-1"
        layout="fill"
        className="w-screen h-screen bg-cover -z-10"
      />
      <div className="absolute flex flex-col justify-between w-screen h-screen overflow-hidden ">
        <div className="flex flex-col items-center justify-center mx-8 mt-14">
          <Title className="self-center max-h-64" />
        </div>
        <div className="flex justify-around">
          <span className="text-[5vh] mx-4 font-rubberstamp whitespace-nowrap">
            UNDER UPPBYGGNAD
          </span>
          <span className="text-[5vh] mx-4 font-rubberstamp whitespace-nowrap">
            UNDER UPPBYGGNAD
          </span>
          <span className="text-[5vh] mx-4 font-rubberstamp whitespace-nowrap">
            UNDER UPPBYGGNAD
          </span>
          <span className="text-[5vh] mx-4 font-rubberstamp whitespace-nowrap">
            UNDER UPPBYGGNAD
          </span>
        </div>
        <div className="flex justify-center">
          <Image
            src={mainPortrait}
            layout="intrinsic"
            alt="Main profile image"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
