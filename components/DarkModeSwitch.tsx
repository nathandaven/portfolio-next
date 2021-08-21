import React, { FunctionComponent } from "react"; // importing FunctionComponent
import classNames from "classnames";
import Head from "next/head";

// Font awesome
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const [active, setActive] = React.useState(false);

  const toggleDarkMode = () => {
    setActive(!active);
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? true
        : false;
    }

    if (active) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [active]);

  return (
    <>
      <div className={classNames("", className)} id={id}>
        <Head>
          <meta name="theme-color" content={active ? "#171815" : "#eaeae5"} />
        </Head>
        <div className="mt-6 cursor-pointer " onClick={toggleDarkMode}>
          <FontAwesomeIcon
            className="transform hover:scale-110 text-2xl lg:text-4xl"
            icon={active ? faSun : faMoon}
          />
        </div>
      </div>
    </>
  );
};

// Example usage
const el = <DarkModeSwitch />;
