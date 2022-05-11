import React, { FunctionComponent } from "react"; // importing FunctionComponent
import { Page } from "../components/Page";

import { Title } from "../components/Title";

import { DesignCard } from "../components/DesignCard";

//Media
import GWPhoto from "../public/resources/gw-site-photo.png";
import PhotoBookPhoto from "../public/resources/photobook.jpg";
import HomeParkPhoto from "../public/resources/homepark.png";
import GWCardPadPhoto from "../public/resources/card-pad-photo.png";
import PauldingPhoto from "../public/resources/paulding-photo.png";
import MaconBibbPhoto from "../public/resources/maconbibb-photo.png";
import AxiomaticPhoto from "../public/resources/axiomatic-photo.png";
import BlindPhoto from "../public/resources/blind-photo.png";

// Framer Motion
import { motion } from "framer-motion";

// Media
import Image from "next/image";
import SampleImage from "../public/resources/circlebg-full.svg";
import { Continue } from "../components/Continue";

type Props = {};

export const Design: FunctionComponent<Props> = ({ children }) => {
  return (
    <Page variant="DARK" id="design">
      <Title text="Design" />
      <div className="pb-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-2 ">
        <DesignCard
          title="Reclaim Home Park"
          date="Spring 2022"
          photo={HomeParkPhoto}
          link="https://drive.google.com/file/d/1WmFoMpn1YrAMAJuynuwrB8yWhFQZ5aWk/view?usp=sharing"
        >
          <p>
            For my senior Capstone class, I worked closely with several group
            members on a co-design effort in Home Park, to create safer spaces
            and to research the effects community involvement has on the safety
            of neighborhoods and cities.
          </p>
        </DesignCard>

        <DesignCard
          title="Finding Peace: A Photobook"
          date="Fall 2021"
          photo={PhotoBookPhoto}
          link="https://drive.google.com/file/d/1DhxukjCNuf1b4saqeEg_ClHmZHHzYj62/view?usp=sharing"
        >
          <p>
            This was my first time creating a printed zine for my photography. I
            created this booklet for LMC 3402 at Georgia Tech, and used Adobe
            InDesign and Adobe Illustrator to design the layout. All photos shot
            on 35mm film, and scanned at the Photo Spot.
          </p>
        </DesignCard>

        <DesignCard
          title="Macon-Bibb County Tax"
          date="May 2021"
          photo={MaconBibbPhoto}
          link="http://www.maconbibbtax.us/"
        >
          <p>
            One of the sites I developed through my internship at Government
            Window. Designed, developed, and shipped all myself, using Figma,
            Bootstrap 4 and JQuery.
          </p>
        </DesignCard>

        <DesignCard
          title="Paulding County Tax"
          date="June 2021"
          photo={PauldingPhoto}
          link="http://www.pauldingcountytax.com/index.html"
        >
          <p>
            One of the sites I developed through my internship at Government
            Window. Designed, developed, and shipped all myself, using Figma,
            Bootstrap 4 and JQuery.
          </p>
        </DesignCard>

        <DesignCard
          title="Government Window Homepage"
          date="April 2021"
          photo={GWPhoto}
          link="https://www.governmentwindow.com/"
        >
          <p>
            Redesigned the Government Window corporate homepage. Hired a
            freelancer through my internship to create the templates, and then I
            customized these templates. Designed in Figma and developed in
            Bootstrap.
          </p>
        </DesignCard>

        <DesignCard
          title="Government Window Stationary"
          date="March 2021"
          photo={GWCardPadPhoto}
          link="https://www.governmentwindow.com/"
        >
          <p>
            Redesigned the business cards for the whole company, as well as
            notepads, brochures, pens, letterheads, power points, and more. All
            in use in the company by employees today. Designed in Adobe
            Illustrator for printing.
          </p>
        </DesignCard>

        <DesignCard
          title="Ethics of Axiomatic Design"
          date="Fall 2020"
          photo={AxiomaticPhoto}
          link="https://drive.google.com/file/d/1q1UCfAxZFIDYwymI4vHIUr1rvA1uQrFq/view?usp=sharing"
        >
          <p>
            An essay about Axiomatic Design when it comes to user interface and
            user experience. Touches on the problems with addictive, &quot;hook
            model&quot; design, found in apps such as TikTok, Instagram, and
            other social media apps.
          </p>
        </DesignCard>

        <DesignCard
          title="Blind Style Guide"
          date="Spring 2020"
          photo={BlindPhoto}
          link="https://drive.google.com/file/d/129HrQ5LrOe5QZlsJDLEu0YHb7Q4oNDXY/view"
        >
          <p>
            Mockup style guide for a brand redesign of skateboard brand Blind.
            Follows a primary color scheme and features several different
            examples. Made for LMC 2720 at Georgia Tech.{/*  */}
          </p>
        </DesignCard>
      </div>
      {/* <Continue /> */}
    </Page>
  );
};

const el = <Design />;
