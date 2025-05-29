import React, { FunctionComponent } from "react"; // importing FunctionComponent
import { Page } from "../components/Page";

import { Title } from "../components/Title";

import { DesignCard } from "../components/DesignCard";

//Media
import GWPhoto from "../public/resources/gw-site-photo.png";
import PhotoBookPhoto from "../public/resources/photobook.jpg";
import HomeParkPhoto from "../public/resources/homepark.jpeg";
import GWCardPadPhoto from "../public/resources/card-pad-photo.png";
import PauldingPhoto from "../public/resources/paulding-photo.png";
import MaconBibbPhoto from "../public/resources/maconbibb-photo.png";
import AxiomaticPhoto from "../public/resources/axiomatic-photo.png";
import BlindPhoto from "../public/resources/blind-photo.png";
import FirefoxLight from "../public/resources/firefox-light.png";
import FirefoxDark from "../public/resources/firefox-dark.png";

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
      <div className="pb-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
        <DesignCard
          title="Firefox Paradise Theme"
          date="Spring 2024"
          photo={FirefoxLight}
          link="https://github.com/nathandaven/firefox-paradise-theme"
        >
          <p>
            My custom Firefox userChrome profile, setup with right handed
            vertical tabs, compact layout, and MacOS/Paradise theming. Also
            works on Windows!
          </p>
        </DesignCard>
        <DesignCard
          title="Home Park - Urban Codesign"
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
          title="Macon-Bibb County Tax"
          date="May 2021"
          photo={MaconBibbPhoto}
          link="http://www.maconbibbtax.us/"
        >
          <p>
            One of the sites I developed through my internship at Government
            Window. Designed, developed, and shipped all myself, using Figma,
            Bootstrap 4 and JQuery. Theres about ~10 of these out there for
            different counties.
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
      </div>
      {/* <Continue /> */}
    </Page>
  );
};

const el = <Design />;
