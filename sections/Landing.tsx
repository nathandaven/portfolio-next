import React, { FunctionComponent } from "react"; // importing FunctionComponent
import { Page } from "../components/Page";

// Framer Motion
import { motion } from "framer-motion";

import { DarkModeSwitch } from "../components/DarkModeSwitch";

// Media
import Image from "next/image";
import SampleImage from "../public/resources/circlebg-full.svg";
import { Continue } from "../components/Continue";

type Props = {};

export const Landing: FunctionComponent<Props> = ({ children }) => {
  return (
    <main className="w-full ml-auto bg-codewhite dark:bg-darkgrey" role="main">
      <section
        className="bg-circlebgfull bg-no-repeat bg-local bg-circle bg-top"
        id="home"
      >
        <Page id="landing">
          <motion.div
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
            <div className="pt-10 lg:pt-15 lg:pb-0  flex justify-between">
              <div className="  ">
                <div className="flex text-left pt-5">
                  <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold text-darkgrey">
                    Hi traveler!
                  </h2>
                </div>
                <div className="flex text-left">
                  <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold text-darkgrey">
                    Meet Nathan Davenport:
                  </h1>
                </div>
              </div>
              <DarkModeSwitch />
            </div>

            <div className="pt-20 px-5 md:pt-10 text-primarygrey dark:text-codewhite">
              <div className="flex align-middle	pt-5 justify-end">
                <motion.div
                  animate={{ scale: 1.2 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.5,
                  }}
                >
                  <h4 className="xl:text-5xl sm:text-3xl text-xl  font-regular">
                    Music Production
                  </h4>
                </motion.div>
              </div>
              <div className="pt-5 sm:pt-10 flex align-middle	 justify-around">
                <motion.div
                  animate={{ scale: 1.2 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.8,
                  }}
                >
                  <h4 className="xl:text-5xl sm:text-3xl text-xl  font-regular">
                    UI/UX Design
                  </h4>
                </motion.div>
                <motion.div
                  animate={{ scale: 1.2 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.2,
                  }}
                >
                  <h4 className="pt-10  xl:text-3xl sm:text-2xl text-xl  font-regular">
                    Photo & Video
                  </h4>
                </motion.div>
                <motion.div
                  animate={{ scale: 1.2 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                  }}
                >
                  <h4 className="pt-20 xl:text-5xl sm:text-3xl text-xl  font-regular">
                    Computer Science
                  </h4>
                </motion.div>
              </div>
              <div className="pt-0 sm:pt-5 flex align-middle	 justify-left">
                <motion.div
                  animate={{ scale: 1.2 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                  }}
                >
                  <h4 className="xl:text-4xl sm:text-2xl text-xl  font-regular">
                    Game Development
                  </h4>
                </motion.div>
              </div>

              <div className="pt-10 sm:pt-10 flex align-middle	 justify-end">
                <motion.div
                  animate={{ scale: 1.2 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.3,
                  }}
                >
                  <h4 className="xl:text-4xl sm:text-2xl text-xl  font-regular">
                    Front-End Development
                  </h4>
                </motion.div>
              </div>
              <Continue />
            </div>
          </motion.div>
        </Page>
      </section>
    </main>
  );
};

const el = <Landing />;
