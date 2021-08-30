import React from "react"; // importing FunctionComponent

import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { motion } from "framer-motion";

import { Page } from "../../components/Page";

import { createClient } from "contentful";
import Link from "next/link";
import { Card } from "../../components/Card";
import Image from "next/image";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_SECRET!,
});

const Photobook: NextPage = () => {
  const [posts, setAlbums] = React.useState([] as any);

  React.useEffect(() => {
    let shouldCancel = false;
    const call = async () => {
      const response = await client.getEntries({ content_type: "album" });
      if (!shouldCancel && response) {
        setAlbums(response.items);
      }
    };
    call();
    return () => {
      shouldCancel = true;
    };
  }, []);
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
      <Header isHomePage={false} />

      <Page variant="LIGHT" id="photobook" className="dark:bg-darkgrey">
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
                delay: 0.1,
              },
            },
          }}
        >
          <div className="my-10 text-left">
            <div className=" w-full md:w-3/4">
              <h1 className="text-4xl pb-10">
                Welcome to my <b>Photobook!</b>
              </h1>
              <h4 className="py-2 text-2xl">Select an album:</h4>
            </div>
          </div>
        </motion.div>
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* <AlbumsList setGallery={setGallery} /> */}
            {posts.map((album: any) => (
              <motion.div
                key={album.fields.title.toString()}
                className="w-full"
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
                      delay: 0.1,
                    },
                  },
                }}
              >
                <Card variant="LIGHT" key={album.fields.title.toString()}>
                  <div className="font-sans pb-4">
                    <h1 className="text-2xl">
                      <b>{album.fields.title}</b>
                    </h1>
                  </div>
                  <div className="py-4 mb-4 relative object-cover xl:h-96 h-72 w-auto  ">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      className="rounded-lg shadow-lg transition-all"
                      src={"http:" + album.fields.coverPhoto.fields.file.url}
                      alt={"Cover photo for album: " + album.fields.title}
                    />
                  </div>

                  <Link href={`/photobook/${album.fields.slug}`}>
                    <button className="w-full px-6 py-2 mx-2 my-1 rounded-md bg-green-600 hover:bg-green-700  text-white  text-md font-sans drop-shadow-md">
                      View Album &gt;
                    </button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="py-10"></div>
      </Page>
      <Footer />
    </>
  );
};

export default Photobook;
