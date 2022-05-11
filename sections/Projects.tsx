import React, { FunctionComponent } from "react"; // importing FunctionComponent
import { Page } from "../components/Page";

import { Title } from "../components/Title";
import { ProjectCard } from "../components/ProjectCard";

//Media
import GWPhoto from "../public/resources/gw.png";
import TravelerPhoto from "../public/resources/traveler.png";
import UsentiPhoto from "../public/resources/usenti.png";
import AudioPhoto from "../public/resources/audio-simulator.png";
import BarsPhoto from "../public/resources/bars-photo.png";
import RayTracerPhoto from "../public/resources/jsraytracer-photo.png";
import HearatalePhoto from "../public/resources/hearatale-photo.png";
import AxiomaticPhoto from "../public/resources/axiomatic-photo.png";
import BlindPhoto from "../public/resources/blind-photo.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Framer Motion
import { motion } from "framer-motion";

// Media
import Image from "next/image";
import SampleImage from "../public/resources/circlebg-full.svg";
import { Continue } from "../components/Continue";

type Props = {};

export const Projects: FunctionComponent<Props> = ({ children }) => {
  return (
    <Page variant="LIGHT" id="projects">
      <Title text="Projects" />

      <div className="pb-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-2 ">
        <ProjectCard
          title="Computer Audio Simulator"
          date="Spring 2022"
          photo={AudioPhoto}
          github="https://github.com/nathandaven/cs4590-simulator"
          link="https://github.com/nathandaven/cs4590-simulator/blob/master/readme.pdf"
        >
          <p>
            My final project for CS4590 at Georgia Tech. This project uses
            Processing and Beads to create a realistic sonified audio simulator
            to simulate skateboarding over object in various conditions.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Usenti for Mac"
          date="Fall 2021"
          photo={UsentiPhoto}
          github="https://github.com/nathandaven/usenti-mac"
          link="https://github.com/nathandaven/usenti-mac/releases/tag/v0.4.0"
        >
          <p>
            I used Wine to package Usenti, a sprite editing application for the
            GameBoy Advance, for MacOS and Linux operating systems. This was a
            great benefit to students in CS 2261 as this software is quite old
            and Windows only.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Traveler: The Quest for Mead"
          date="Fall 2020"
          photo={TravelerPhoto}
          github="https://github.com/nathandaven/traveller-gba"
          link="https://gba.ninja/?autorun=https://nathandaven.com/resources/traveller-quest-for-mead.gba&exclusive"
        >
          <p>
            My final project for CS 2261 at Georgia Tech. A top down and
            side-scrolling RPG built in C and assembly for the Game Boy Advance.
            Click &quot;check it out&quot; and then &quot;Run Anyway&quot; to
            play in the browser!
          </p>
        </ProjectCard>

        <ProjectCard
          title="jsRayTracer"
          date="Spring 2021"
          photo={RayTracerPhoto}
          github="https://github.com/nathandaven/jsRayTracer"
          link="https://nathandaven.github.io/jsRayTracer/"
        >
          <p>
            This is my Ray Tracer project for CS 3451 Computer Graphics at
            Georgia Tech. This project implements ray tracing implementations
            for spheres and disks, and adds functionality for diffuse lighting,
            soft shadows, point lights, area lights, anti aliased sub sampling,
            and jitter shadow math.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Third Grade Contractions"
          date="Fall 2020 - Spring 2021"
          photo={HearatalePhoto}
          github="https://github.com/penalverbj/3rdGradeLiteracyApp"
          link="https://drive.google.com/file/d/1Ca44nozhrrNWHe663-N_DIC3KSULpymz/view?usp=sharing"
        >
          <p>
            My GT Junior Design developed an iOS/Android application for Hear a
            Tale, a teaching non-profit. Using React-Native, we built the third
            grade portion of the app. This app teaches contractions using visual
            and auditory cues, with challenging quizzes and informative lessons.
          </p>
        </ProjectCard>

        <ProjectCard
          title="Audio Responsive Bars"
          date="Fall 2019"
          photo={BarsPhoto}
          github="https://github.com/nathandaven/audio-responsive-bars"
          link="https://nathandaven.github.io/audio-responsive-bars/"
        >
          <p>
            A reactive audio engine for the aframe.io framework. The bars will
            react to the amplitude of three selected music tracks. Created for
            the class LMC 2700.
          </p>
        </ProjectCard>
      </div>
      <div className="flex w-full justify-center text-center ">
        <a
          className="transform hover:scale-105 py-5 "
          href="https://www.github.com/nathandaven"
          target="_blank"
          rel="noreferrer"
        >
          Check out my{" "}
          <b className="text-green-900 dark:text-green-400">
            <FontAwesomeIcon className="" icon={faGithub} /> Github{"  "}
          </b>{" "}
          for more &gt;
        </a>
      </div>
      <div className="flex justify-center w-full pb-4">
        <Continue />
      </div>
    </Page>
  );
};

const el = <Projects />;
