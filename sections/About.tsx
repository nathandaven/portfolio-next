import React, { FunctionComponent } from "react"; // importing FunctionComponent
import { Page } from "../components/Page";
import { Card } from "../components/Card";
import { Title } from "../components/Title";

// Framer Motion
import { motion } from "framer-motion";

// Media
import Image from "next/image";
import ProfilePhoto from "../public/resources/profile.jpeg";
import { Continue } from "../components/Continue";

type Props = {};

export const About: FunctionComponent<Props> = ({ children }) => {
  return (
    <Page variant="DARK" id="about">
      <Title text="About" />

      <Card variant="DARK">
        {/* <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-2  font-mono"> */}
        <div className=" w-full flex content-evenly lg:flex-row flex-col  font-mono">
          <div className="order-2 lg:order-1 w-full">
            <div className="">
              <h1 className="py-2 pb-8 text-4xl font-sans">
                <b>Hi!</b>
              </h1>

              <p className="py-4">
                I am a software engineer and UI/UX designer located in{" "}
                <span className="text-codepink">Atlanta, Georgia</span>.
              </p>

              <p className="py-4">
                I just graduated in Spring 2022 with Highest Honors from the{" "}
                <span className="text-codemustard">
                  Georgia Institute of Technology
                </span>{" "}
                for <span className="text-codepink">Computational Media</span>!
                My threads were Media (CS) and Interaction Design (UI/UX). I
                really enjoyed worked as a Computing TA for CS 2261 during the
                last leg of my degree, as well as getting involved with the
                student radio station, WREK Radio.
              </p>
              <p className="py-4">
                As of Summer 2022, I work full-time at{" "}
                <a href="https://www.ncr.com" className="text-codeblue">
                  NCR Global
                </a>{" "}
                as a Software Engineer. During this period, I hope to refine my
                skills, and absorb as much knowledge as possible :)
              </p>

              <p className="py-4">
                My current goals are to save some money, travel, and get my
                loans paid off! In my free time, I like to produce music, cycle,
                skateboard, and drink coffee (or beer)! Thanks for checking out
                my website 😄
              </p>

              <p className="py-4">
                Looking for my resume? Find it{" "}
                <a
                  href="https://drive.google.com/file/d/13cUw_4xpG6vXAv0yI5LGagOq_D6VhRJR/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="text-codeorange hover:underline"
                >
                  <b>here</b>
                </a>
                .
              </p>
            </div>

            <div className="py-4 ">
              <p className="font-mono text-codewhite">
                <span className="text-codepink">export default </span>
                <span className="text-codegreen underline">About</span>;
              </p>
            </div>
          </div>
          <div className="px-8 order-1 w-full lg:order-2 flex items-center justify-center">
            <Image
              className="bg-codewhite p-1 rounded-full  shadow-lg"
              src={ProfilePhoto}
              alt="Portrait of Nathan Davenport"
            />
          </div>
        </div>
      </Card>
      <div className="flex justify-center w-full pt-0 pb-4">
        <Continue />
      </div>
    </Page>
  );
};

const el = <About />;
