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
import {
  faAngleDoubleDown,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Meta } from "../../components/Meta";

// Props (type checked) -- use ? to make a prop optional
type Props = {
  className?: string;
  data: any;
};

// View types
export enum View {
  LIST = 4,
  GRIDSMALL = 8,
  GRIDLARGE = 16,
}

// exporting component with OPTIONAL children
const Slug: NextPage<Props> = ({ data }) => {
  // Data fetching logic

  // View logic

  const [view, setView] = React.useState(View.GRIDSMALL);

  function renderView() {
    return (
      <GooglePhotoList
        galleryID={data.fields.googlePhotosId}
        view={view}
        cropPreviews={data.fields.cropPreviews}
      />
    );
  }

  if (!data) {
    return (
      <>
        <Meta
          title={
            data.fields.title + " | Photobook | Nathan Davenport's Portfolio"
          }
          description={data.fields.description}
          link={data.fields.slug}
          imageURL={"http:" + data.fields.coverPhoto.fields.file.url}
        />

        <Page variant="LIGHT" id="loading">
          <div className="w-full flex justify-center text-5xl">
            <FontAwesomeIcon icon={faCircleNotch} spin />
          </div>
        </Page>
      </>
    );
  }

  return (
    <>
      <Meta
        title={
          data.fields.title + " | Photobook | Nathan Davenport's Portfolio"
        }
        description={data.fields.description}
        link={data.fields.slug}
        imageURL={"http:" + data.fields.coverPhoto.fields.file.url}
      />
      <div>
        <Header isHomePage={false} />
        <Page
          variant="LIGHT"
          id="photobook"
          className="dark:bg-darkgrey min-h-0"
        >
          <div className="my-20"></div>
          <motion.div
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
            <div className="my-10 text-left flex flex-col sm:flex-row">
              <div className="w-full text-left">
                <h1 className="text-6xl pb-5">
                  <b>{data.fields.title}</b>
                </h1>
                <h4 className="py-2  text-2xl">{data.fields.description}</h4>
              </div>

              {/* view selector */}
              <div className="text-gray-900 dark:text-gray-500 text-opacity-50 text-2xl  hidden lg:block">
                <div className=" py-5 flex justify-between">
                  <FontAwesomeIcon
                    className={classNames(
                      "mx-5 transform hover:scale-110 cursor-pointer",
                      view === View.LIST
                        ? "text-primarygrey dark:text-codewhite"
                        : ""
                    )}
                    icon={faAlignJustify}
                    onClick={() => setView(View.LIST)}
                  />
                  <FontAwesomeIcon
                    className={classNames(
                      "mx-5 transform hover:scale-110 cursor-pointer",
                      view === View.GRIDSMALL
                        ? "text-primarygrey dark:text-codewhite "
                        : ""
                    )}
                    icon={faThLarge}
                    onClick={() => setView(View.GRIDSMALL)}
                  />
                  <FontAwesomeIcon
                    className={classNames(
                      "mx-5 transform hover:scale-110 cursor-pointer",
                      view === View.GRIDLARGE
                        ? "text-primarygrey dark:text-codewhite"
                        : ""
                    )}
                    icon={faTh}
                    onClick={() => setView(View.GRIDLARGE)}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <div className="min-h-screen w-full">{renderView()}</div>

          <div className="py-2"></div>
        </Page>
        <Footer />
      </div>
    </>
  );
};

export default Slug;

// static rendering
interface IParams extends ParsedUrlQuery {
  slug: string;
}

// getting Contentful client
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_SECRET!,
});

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams; // no longer causes error

  // requesting data
  const response = await client.getEntries({
    content_type: "album",
    "fields.slug[in]": slug,
  });

  return {
    props: { data: response.items[0] },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.getEntries({ content_type: "album" });

  const arr: string[] = ["random-selections", "slug2"];

  const paths = response.items.map((album: any) => {
    return {
      params: { slug: album.fields.slug.toString() },
    };
  });
  return { paths, fallback: false };
};
