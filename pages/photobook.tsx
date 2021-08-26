import React from "react"; // importing FunctionComponent

import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { motion } from "framer-motion";

import { Page } from "../components/Page";

import { GooglePhotoList } from "../components/GooglePhotoList";

const Photobook: NextPage = () => {
  return (
    <>
      {/* Metadata */}
      <Head>
        <title>Photobook | Nathan Davenport&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" href="/logo192.png" />

        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Nathan Davenport is an aspiring front-end developer, UI/UX designer, and Georgia Tech student located in Midtown, Atlanta. "
        />

        <link rel="canonical" href="https://nathandaven.com/photobook" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Photobook | Nathan Davenport's Portfolio"
        />
        <meta
          property="og:description"
          content="Nathan Davenport is an aspiring front-end developer, UI/UX designer, and Georgia Tech student located in Midtown, Atlanta."
        />
        <meta property="og:image" content="/resources/profile.jpeg" />
        <meta property="og:url" content="https://nathandaven.com/posts" />
        <meta
          property="og:site_name"
          content="Photobook | Nathan Davenport's Portfolio"
        />

        <meta
          name="twitter:title"
          content="Photobook | Nathan Davenport's Portfolio"
        />
        <meta
          name="twitter:description"
          content="Nathan Davenport is an aspiring front-end developer, UI/UX designer, and Georgia Tech student located in Midtown, Atlanta."
        />
        <meta name="twitter:image" content="/resources/profile.jpeg" />
        <meta name="twitter:site" content="@nathandaven" />
        <meta name="twitter:creator" content="@nathandaven" />

        <meta property="profile:first_name" content="Nathan" />
        <meta property="profile:last_name" content="Davenport" />
      </Head>

      {/* Content */}
      <Header solid={true} isHomePage={true} />

      <Page variant="LIGHT" id="photobook">
        <div className="my-20"></div>
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
          <div className="my-20 text-left">
            <div className=" w-full md:w-3/4">
              <h1 className="text-4xl pb-10">
                Welcome to my <b>Photobook!</b>
              </h1>
              <h4 className="py-2 text-2xl">Select an album:</h4>
            </div>

            <div className="flex flex-col md:flex-row justify-between py-10">
              {/* <AlbumsList setGallery={setGallery} /> */}
            </div>
          </div>
        </motion.div>
        <div className=""></div>
        <GooglePhotoList
          galleryID={/* temporary: */ "jA3ZRcm7KYxdYJe96" /* currentGallery */}
        />
      </Page>
      <Footer />
    </>
  );
};

export default Photobook;
