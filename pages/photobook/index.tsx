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

import { AlbumCard } from "../../components/AlbumCard";
import { Meta } from "../../components/Meta";

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
      <Meta
        title={"Nathan Davenport's Photobook"}
        description={"Nathan Davenport's photo gallery."}
        link={"https://nathandaven.com/photobook"}
      />

      {/* Content */}
      <Header isHomePage={false} />

      <Page variant="LIGHT" id="photobook" className="dark:bg-darkgrey">
        <div className="mt-10 mb-20"></div>
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
          <div className="my-5 text-left">
            <div className="text-5xl md:text-7xl xl:text-9xl  w-full">
              <b>GALLERY</b>
            </div>
            <div className="text-xl md:text-2xl w-full ">
              <p>Select an album:</p>
            </div>
          </div>
        </motion.div>
        <div className="w-full pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                <AlbumCard
                  title={album.fields.title}
                  photoURL={album.fields.coverPhoto.fields.file.url}
                  slug={album.fields.slug}
                />
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
