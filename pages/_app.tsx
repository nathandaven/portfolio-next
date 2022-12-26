import type { AppProps } from "next/app";
import React from "react";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from "@vercel/analytics/react";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import "../styles/globals.css";

// enum for theme-color hex colors
export enum THEME_COLOR {
  LIGHT = "#eaeae5",
  DARK = "#171815",
  SAND = "#cf9f74",
}

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // I know addListener is deprecated.
    // addEventListener does not work here on iOS 13 and Safari 13,
    // so using this for now. Web development is so fun!

    window.matchMedia("(prefers-color-scheme: dark)").addListener(function () {
      let themeColor: THEME_COLOR = THEME_COLOR.LIGHT;

      if (localStorage.forceTheme !== "true") {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          localStorage.theme = "dark";
          document.documentElement.classList.add("dark");
          themeColor = THEME_COLOR.DARK;
        } else {
          localStorage.theme = "light";
          document.documentElement.classList.remove("dark");
          themeColor = THEME_COLOR.LIGHT;
        }
      } else {
        if (localStorage.theme === "dark") {
          localStorage.theme = "dark";
          document.documentElement.classList.add("dark");
          themeColor = THEME_COLOR.DARK;
        } else {
          localStorage.theme = "light";
          document.documentElement.classList.remove("dark");
          themeColor = THEME_COLOR.LIGHT;
        }
      }

      document
        .querySelector("meta[name=theme-color]")!
        .setAttribute(
          "content",
          themeColor === THEME_COLOR.DARK ? THEME_COLOR.DARK : THEME_COLOR.LIGHT
        );
    });

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
export default MyApp;
