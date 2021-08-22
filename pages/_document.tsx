import Document, { Html, Head, Main, NextScript } from "next/document";

function setInitialColorMode() {
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
  } else {
    if (localStorage.theme === "dark") {
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
}

// our function needs to be a string
const blockingSetInitialColorMode = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
})()
`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: blockingSetInitialColorMode,
            }}
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
