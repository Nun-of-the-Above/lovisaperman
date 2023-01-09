import { ContactSection } from "../components/ContactSection/ContactSection";
import { HeadPart } from "../components/HeadPart";
import { ImagesSection } from "../components/ImagesSection/ImagesSection";
import { LandingSection } from "../components/LandingSection/LandingSection";
import { MediaSection } from "../components/MediaSection/MediaSection";
import type { NextPage } from "next";
import { PresentationSection } from "../components/PresentationSection/PresentationSection";

// TODO: Make all backgrounds proper backgrounds and not just images
// TODO: Rework positioning to be in flex to work with mobile
// TODO: Add sanity.io CMS for everything mutable

const Home: NextPage = () => {
  return (
    <>
      <HeadPart />
      <div className="flex flex-col items-center justify-center overflow-hidden ">
        <div className="w-full max-w-screen-2xl">
          <LandingSection />
          <PresentationSection />
          <MediaSection />
          <ContactSection />
          <ImagesSection />
        </div>
      </div>
    </>
  );
};

export default Home;
