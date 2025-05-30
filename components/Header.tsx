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
        <nav className="container mx-auto px-4 xl:px-20  justify-center items-center h-16  hidden xs:flex ">
          {/* Logo / title */}
          <div className="flex-1 text-left contents">
            <div className="flex-1 flex ">
              <Link href="/" passHref>
                <a className="text-xl text-left transform hover:scale-110">
                  <b>Nathan Davenport</b>{" "}
                </a>
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex-1 text-right contents">
            <Socials />
          </div>
        </nav>
      </header>
    </>
  );
};

// Example usage
const el = <Header isHomePage={false} />;
