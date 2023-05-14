import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Titillium_Web } from "@next/font/google";
import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
const kungFont = localFont({
  src: "../public/kungfont-regular.otf",
  variable: "--font-kung",
});

// Font files can be colocated inside of `pages`
const moonlightClean = localFont({
  src: "../public/MoonlightClean.ttf",
  variable: "--font-moonlight",
});

// If loading a variable font, you don't need to specify the font weight
const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-titillium",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${titillium.variable} ${kungFont.variable} ${moonlightClean.variable} font-sans w-screen`}
    >
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
