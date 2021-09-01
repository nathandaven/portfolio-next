import React, { FunctionComponent } from "react"; // importing FunctionComponent
import classNames from "classnames";
import Head from "next/head";

// Font awesome
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { THEME_COLOR } from "../pages/_app";

// Props (type checked) -- use ? to make a prop optional
type Props = {
  className?: string;
  id?: string;
};

// exporting component with OPTIONAL children
export const DarkModeSwitch: FunctionComponent<Props> = ({
  className,
  id,
  children,
}) => {
  const [loaded, setLoaded] = React.useState(false);
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    if (localStorage !== null) {
      setLoaded(true);
      setDark(localStorage.theme === "dark" ? true : false);
    }
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(!dark);
    localStorage.forceTheme = true;
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");

      document
        .querySelector("meta[name=theme-color]")!
        .setAttribute("content", THEME_COLOR.LIGHT);
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");

      document
        .querySelector("meta[name=theme-color]")!
        .setAttribute("content", THEME_COLOR.DARK);
    }
  };

  if (loaded) {
    return (
      <div className={classNames("text-darkgrey", className)} id={id}>
        <div className="mt-6 cursor-pointer " onClick={toggleDarkMode}>
          <FontAwesomeIcon
            className="transform hover:scale-110 text-2xl lg:text-4xl"
            icon={dark ? faMoon : faSun}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

// Example usage
const el = <DarkModeSwitch />;
