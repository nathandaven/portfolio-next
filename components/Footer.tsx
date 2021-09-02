import React, { FunctionComponent } from "react"; // importing FunctionComponent
import classNames from "classnames";
import { Socials } from "./Socials";

// Props (type checked) -- use ? to make a prop optional
type Props = {
  className?: string;
  id?: string;
};

// exporting component with OPTIONAL children
export const Footer: FunctionComponent<Props> = ({
  className,
  id,
  children,
}) => {
  return (
    <>
      <footer
        className={classNames(
          "w-full bg-codewhite text-primarygrey dark:bg-primarygrey dark:text-codewhite ",
          className
        )}
        id={id}
      >
        <div className="container mx-auto px-4 xl:px-20 items-center py-8  md:pb-0">
          <div className="flex justify-between  text-left">
            <b className="">Nathan Davenport</b>
            <Socials />
          </div>
          <div className="flex justify-between  text-left h-16 ">
            <p className="text-sm w-1/2">
              {" "}
              Built using{" "}
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                React JS
              </a>
              ,{" "}
              <a
                href="https://www.contentful.com/developers/docs/references/content-delivery-api/"
                target="_blank"
                rel="noreferrer"
              >
                Contentful Client API
              </a>
              ,{" "}
              <a
                href="https://www.framer.com/motion/"
                target="_blank"
                rel="noreferrer"
              >
                Framer Motion
              </a>
              , and{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                Tailwind CSS
              </a>{" "}
              😎
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

// Example usage
const el = <Footer />;
