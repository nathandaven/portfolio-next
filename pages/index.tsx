import React from "react"; // importing FunctionComponent

import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { Landing } from "../sections/Landing";
import { About } from "../sections/About";
import { Projects } from "../sections/Projects";
import { Design } from "../sections/Design";

import { Meta } from "../components/Meta";

const Home: NextPage = () => {
  return (
    <>
      {/* Metadata */}
      <Meta />

      {/* Content */}
      <Header isHomePage={true} />
      <Landing />
      <About />
      <Projects />
      <Design />
      <Footer className="dark:bg-darkgrey" />
    </>
  );
};

export default Home;
