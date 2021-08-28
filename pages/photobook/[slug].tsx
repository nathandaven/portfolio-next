import React, { FunctionComponent } from "react"; // importing FunctionComponent

import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { createClient } from "contentful";
import { useRouter } from "next/router";
import classNames from "classnames";

import { Page } from "../../components/Page";

import { GooglePhotoList } from "../../components/GooglePhotoList";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_SECRET!,
});

// Props (type checked) -- use ? to make a prop optional
type Props = {
  className?: string;
};

// exporting component with OPTIONAL children
const Slug: FunctionComponent<Props> = ({ className, children }) => {
  const router = useRouter();
  const { slug } = router.query;

  const [data, setData] = React.useState(null as any);

  React.useEffect(() => {
    console.log(slug);
    let shouldCancel = false;
    const call = async () => {
      const response = await client.getEntries({
        content_type: "album",
        "fields.slug[in]": slug,
      });
      if (!shouldCancel && response) {
        setData(response.items[0]);
        console.log(response.items[0]);
      }
    };
    call();
    return () => {
      shouldCancel = true;
    };
  }, [data, slug]);

  if (!data) {
    return (
      <Page variant="LIGHT" id="loading">
        <div className="w-full flex justify-center text-5xl">
          <FontAwesomeIcon icon={faCircleNotch} spin />
        </div>
      </Page>
    );
  }

  return (
    <>
      <div className={classNames("", className)}>
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
                  delay: 0.2,
                },
              },
            }}
          >
            <div className="my-10 text-left">
              <div className="w-full text-left">
                <h1 className="text-6xl pb-5">
                  <b>{data.fields.title}</b>
                </h1>
                <h4 className="py-2 text-2xl">{data.fields.description}</h4>
              </div>

              <div className="flex flex-col md:flex-row justify-between py-10">
                {/* <AlbumsList setGallery={setGallery} /> */}
              </div>
            </div>
          </motion.div>
          <div className=""></div>
          <GooglePhotoList galleryID={data.fields.googlePhotosId} />
          <div className="py-2"></div>
        </Page>
        <Footer />
      </div>
    </>
  );
};

export default Slug;
