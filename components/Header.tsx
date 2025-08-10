import React, { FunctionComponent } from "react"; // importing FunctionComponent
import classNames from "classnames";
import { Socials } from "./Socials";
import Link from "next/link";

// Props (type checked) -- use ? to make a prop optional
type Props = {
  isHomePage: boolean;
  className?: string;
  id?: string;
};

// exporting component with OPTIONAL children
export const Header: FunctionComponent<Props> = ({
  isHomePage,
  className,
  id,
  children,
}) => {
  const [color, setColor] = React.useState("");
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    window.addEventListener("scroll", function () {
      checkScroll();
      let tag = "";
      if (window.pageYOffset > 300 || !isHomePage) {
        tag =
          "bg-headerlight  dark:text-codewhite dark:bg-headerdark shadow-md  backdrop-blur-md";
      } else {
        tag = " text-primarygrey";
      }
      setColor(tag);
    });
  }, [isHomePage]);

  // not implemented
  function checkScroll() {
    /*
     ** Find the direction of scroll
     ** 0 - initial, 1 - up, 2 - down
     */
    var doc = document.documentElement;
    var w = window;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    } else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      if (direction === 2 && curScroll > 52) {
        //replace 52 with the height of your header in px

        setShow(false);
      } else if (direction === 1) {
        setShow(true);
      }
    }

    prevScroll = curScroll;
  }

  return (
    <>
      <header
        className={classNames(
          "fixed top-0 left-0 right-0 z-50 justify-center items-center transition-all",
          color,
          !isHomePage
            ? "bg-headerlight  dark:text-codewhite dark:bg-headerdark shadow-md  backdrop-blur-md"
            : "",
          className,
          show ? "block" : "hidden"
        )}
        id={id}
      >
        <nav className="container mx-auto px-4 xl:px-20  justify-center sm:justify-between items-center h-16  hidden xs:flex ">
          {/* Social Icons */}
          <div className="hover:scale-110 items-center">
            <a className=" font-medium" href="https://nathandaven.com">
              {"<"} back to <span className="font-medium">nathandaven.com</span>
            </a>
          </div>

          {/* Logo / title */}
          <div className="hidden lg:block">
            <div className="flex-1 flex ">
              <Link href="/" passHref>
                <a className="text-xl text-center transform hover:scale-110">
                  <b>Nathan Davenport</b> – Developer Portfolio
                </a>
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="text-right hover:scale-110 hidden transform sm:block pl-20 ml-14">
            <a className=" font-medium" href="https://nathandaven.com/links">
              <span className="font-medium">all links {">"}</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

// Example usage
const el = <Header isHomePage={false} />;
