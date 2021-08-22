import type { AppProps } from "next/app";
import React from "react";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", function () {
        if (localStorage.forceTheme !== "true") {
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
            document.head.innerHTML =
              document.head.innerHTML +
              '<meta name="theme-color" content={"#171815"} />';
          } else {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
            document.head.innerHTML =
              document.head.innerHTML +
              '<meta name="theme-color" content={"#eaeae5"} />';
          }
        }
      });

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  }, []);

  return <Component {...pageProps} />;
}
export default MyApp;
