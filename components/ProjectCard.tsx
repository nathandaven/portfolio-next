import React, { FunctionComponent, useEffect } from "react"; // importing FunctionComponent
import classNames from "classnames";

import { motion } from "framer-motion";

import { Card } from "./Card";

// Media
import Image from "next/image";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Props (type checked) -- use ? to make a prop optional
type Props = {
  photo: any;
  title: string;
  date: string;
  link: string;
  github: string;
  className?: string;
  variant?: string;
  id?: string;
};

// exporting component with OPTIONAL children
export const ProjectCard: FunctionComponent<Props> = ({
  photo,
  title,
  date,
  link,
  github,
  className,
  id,
  children,
}) => {
  React.useEffect(() => {}, []);

  function goToLink() {
    window.open(link, "_blank");
  }

  function goToGithub() {
    window.open(github, "_blank");
  }

  return (
    <>
      <motion.div
        className={className}
        id={id}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}
      >
        <Card variant="LIGHT">
          <div className="font-sans ">
            <div className="">
              <div className="py-4 mb-4 relative object-cover xl:h-96 h-72 w-auto  ">
                <Image
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="rounded-lg shadow-lg"
                  src={photo}
                  alt={title}
                />
              </div>
              <div className="py-1">
                <h1 className="text-2xl">
                  <b>{title}</b>
                </h1>
                <h2 className=" text-md">{date}</h2>
              </div>
              <span className="py-1">{children}</span>
            </div>

            <div className="pt-6 flex justify-between items-center">
              <p className="font-mono ">
                <span className="text-codepink">export default </span>
                <span className="text-primarygrey dark:text-codegreen underline">
                  Project
                </span>
                ;
              </p>
              <div className="text-right">
                <button
                  onClick={goToGithub}
                  className="px-6 py-2 mx-2 my-1 rounded-md bg-gray-300 bg-opacity-50 hover:bg-opacity-75 text-primary-grey dark:bg-gray-500 dark:bg-opacity-50 dark:hover:bg-opacity-75 dark:text-codewhite text-md font-sans drop-shadow-md"
                >
                  GitHub{" "}
                  <FontAwesomeIcon
                    className="transform hover:scale-110"
                    icon={faGithub}
                  />
                </button>
                <button
                  onClick={goToLink}
                  className="px-6 py-2 mx-2 my-1 rounded-md bg-green-600 hover:bg-green-700  text-white  text-md font-sans drop-shadow-md"
                >
                  Check it out &gt;
                </button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </>
  );
};

// Example usage
const el = <ProjectCard photo="" title="" date="" link="" github="" />;
