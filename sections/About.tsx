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
          <div className="order-2 flex-1 lg:order-1 w-full ">
            <div className="">
              <p className="py-4 pb-6 text-xl">
                <span className="">
                  Software engineer with{" "}
                  <b className="text-codeblue">3 years</b> of experience
                  building full-stack applications using{" "}
                  <span className="text-codeblue">
                    <b className="">TypeScript</b>
                  </span>
                  ,{" "}
                  <span className="text-codeblue">
                    <b className="">React</b>
                  </span>
                  , and{" "}
                  <span className="text-codeblue">
                    <b className="">Kubernetes</b>
                  </span>
                  . Currently at <b className="text-purple-300">NCR Voyix</b>.
                </span>
              </p>
              <p className="py-4 pb-6">
                <h4 className="text-xl text-codegreen py-0.5">
                  <b>Current Role</b>
                </h4>
                <ul>
                  <li className="py-0.5">
                    <b className="">NCR Voyix</b> – Software Engineer II (Oct.
                    2023 - Present)
                  </li>
                </ul>
              </p>
              <p className="py-4 pb-6">
                <h4 className="text-xl text-codegreen py-0.5">
                  <b>Previous Roles</b>
                </h4>
                <ul>
                  <li className="py-0.5">
                    <b className="">NCR Corporation</b> – Software Engineer I
                    (June 2022 - Oct. 2023)
                  </li>
                  <li className="py-0.5">
                    <b className="">Georgia Institute of Technology</b> – CS
                    2261 Teaching Assistant (Aug. 2021 - May 2022)
                  </li>
                  <li className="py-0.5">
                    <b className="">Government Window, LLC.</b> – Software
                    Engineering Intern (Jan. 2021 - Aug. 2021)
                  </li>
                </ul>
              </p>
              <p className="py-4 pb-6">
                <h4 className="text-xl text-codegreen py-0.5">
                  <b>Skills</b>
                </h4>
                <ul>
                  <li className="py-0.5">
                    <b className="">Languages</b> – TypeScript, JavaScript,
                    Python, Java, PHP, HTML/CSS
                  </li>
                  <li className="py-0.5">
                    <b className="">Frameworks</b> – Node.js, React, NestJS,
                    RxJS, Redux, Next.js, Redis, Cypress, Jest, Gherkin
                  </li>
                  <li className="py-0.5">
                    <b className="">Tools</b> – Docker, Kubernetes, Git, GitHub
                    Actions, MQTT, Redis, PostgreSQL, REST, Agile/Scrum
                  </li>
                  <li className="py-0.5">
                    <b className="">Software</b> – VS Code, IntelliJ, Google
                    Cloud Platform (GCP), Jira, Confluence, Figma
                  </li>
                </ul>
              </p>
              <p className="py-4 pb-6">
                <h4 className="text-xl text-codegreen py-0.5">
                  <b>Education</b>
                </h4>
                <ul>
                  <li className="py-0.5">
                    <b className="">Georgia Institute of Technology</b> – B.S.
                    in Computational Media (Grad. May 2022)
                  </li>
                </ul>
              </p>

              <p className="py-4 pb-6">
                <h4 className="text-xl text-codegreen py-0.5 ">
                  <b>Contact me</b>
                </h4>
                <ul>
                  <li>
                    Email me at:{" "}
                    <a
                      href="mailto:work@nathandaven.com"
                      className="text-codeblue  hover:font-bold"
                    >
                      work@nathandaven.com
                    </a>
                  </li>
                  <li>
                    Find me on LinkedIn:{" "}
                    <a
                      href="https://linkedin.com/in/nathandaven"
                      className="text-codeblue hover:font-bold"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/nathandaven
                    </a>
                  </li>
                  <li>
                    All my links:{" "}
                    <a
                      href="https://nathandaven.com/links"
                      className="text-codeblue hover:font-bold"
                      target="_blank"
                      rel="noreferrer"
                    >
                      nathandaven.com/links
                    </a>
                  </li>
                </ul>
              </p>
            </div>

            <div className="py-4 ">
              <p className="font-mono text-codewhite">
                <span className="text-codepink">export default </span>
                <span className="text-codegreen underline">About</span>;
              </p>
            </div>
          </div>
          <div className="basis-1 px-8 order-1 w-full lg:order-2 flex items-center self-center max-w-md md:max-w-lg lg:max-w-sm xl:max-w-md justify-center pb-8 lg:pb-0">
            <Image
              className="bg-codewhite p-1 rounded-full shadow-lg justify-self-center "
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
