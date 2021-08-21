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

              <p className="py-1">
                I am an aspiring front-end developer and UI/UX designer located
                in <span className="text-codepink">Midtown, Atlanta</span>.
              </p>

              <p className="py-1">
                I currently attend the{" "}
                <span className="text-codemustard">
                  Georgia Institute of Technology
                </span>{" "}
                for <span className="text-codepink">Computational Media</span>,
                an effort to create a more applicable Computer Science degree by
                applying creative outlets to my technical studies. I am a senior
                and I plan to graduate{" "}
                <span className="text-codegreen">Spring 2022</span>.
              </p>

              <p className="py-1">
                For the past year I have been working for{" "}
                <a
                  href="https://www.GovernmentWindow.com"
                  className="text-codeblue"
                >
                  Government Window
                </a>
                , a local software company that manages payments for government
                clients. Over the past year I have redesigned and coded out our
                front-end design language for 2021, shipping out at least a
                dozen websites.
              </p>

              <p className="py-1">
                In my free time, I like to produce music, skateboard, and drink
                coffee! Thanks for checking out my website 😄
              </p>

              <p className="py-1 pt-8">
                Looking for my resume? Find it{" "}
                <a
                  href="https://drive.google.com/file/d/1SdDLIztC9DOZ7hB5Jur1OtiyXhqxme11/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="text-codeorange hover:underline"
                >
                  <b>here</b>
                </a>
                .
              </p>
            </div>

            <div className="pt-8 ">
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
