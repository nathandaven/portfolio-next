import type { AppProps } from "next/app";
import React from "react";

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setDark] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? true
        : false;
    }

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "dark";
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return <Component {...pageProps} />;
}
export default MyApp;
