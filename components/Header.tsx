import React, { FunctionComponent } from "react"; // importing FunctionComponent
import classNames from "classnames";
import { Socials } from "./Socials";
import Link from "next/link";

// Props (type checked) -- use ? to make a prop optional
type Props = {
  solid: boolean;
  className?: string;
  id?: string;
};

// exporting component with OPTIONAL children
export const Header: FunctionComponent<Props> = ({
  solid,
  className,
  id,
  children,
}) => (
  <>
    <header
      className={classNames(
        "fixed top-0 left-0 right-0 z-50 justify-center items-center",
        solid ? "" : null,
        solid ? "bg-codewhite dark:bg-darkgrey shadow-md" : "",
        className
      )}
      id={id}
    >
      <nav className="container mx-auto px-4 xl:px-40 flex justify-center items-center h-16  ">
        {/* Logo / title */}
        <div className="flex-1 text-left  hidden sm:contents">
          <div className="flex-1 flex ">
            <Link href="/" passHref>
              <a className="text-xl text-left transform hover:scale-110">
                <b>Nathan Davenport</b>{" "}
              </a>
            </Link>
          </div>
        </div>

        {/* Sections */}
        <div className="flex flex-auto">
          <Link href="/" passHref>
            <a className="flex-auto text-center transform hover:scale-110">
              Home
            </a>
          </Link>
          <Link href="/photobook" passHref>
            <a className="flex-auto text-center transform hover:scale-110">
              Photobook
            </a>
          </Link>
          <Link href="/posts" passHref>
            <a className="flex-auto text-center transform hover:scale-110">
              Blog
            </a>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex-1 text-right hidden md:contents">
          <Socials />
        </div>
      </nav>
    </header>
  </>
);

// Example usage
const el = <Header solid={false} />;