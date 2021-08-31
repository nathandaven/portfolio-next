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
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_SECRET!,
});

// Props (type checked) -- use ? to make a prop optional
type Props = {
  className?: string;
};

// View types
enum View {
  LIST,
  GRIDSMALL,
  GRIDLARGE,
}

// exporting component with OPTIONAL children
const Slug: FunctionComponent<Props> = ({ className, children }) => {
  const router = useRouter();
  const { slug } = router.query;

  // Data fetching logic

  const [data, setData] = React.useState(null as any);

  React.useEffect(() => {
    let shouldCancel = false;
    const call = async () => {
      const response = await client.getEntries({
        content_type: "album",
        "fields.slug[in]": slug,
      });
      if (!shouldCancel && response) {
        setData(response.items[0]);
      }
    };
    call();
    return () => {
      shouldCancel = true;
    };
  }, [data, slug]);

  // View logic

  const [view, setView] = React.useState(View.LIST);

  function renderView() {
    switch (view) {
      case View.LIST:
        return (
          <GooglePhotoList
            galleryID={data.fields.googlePhotosId}
            gridSize={1}
          />
        );

      case View.GRIDSMALL:
        return (
          <GooglePhotoList
            galleryID={data.fields.googlePhotosId}
            gridSize={2}
          />
        );

      case View.GRIDLARGE:
        return (
          <GooglePhotoList
            galleryID={data.fields.googlePhotosId}
            gridSize={4}
          />
        );

      default:
        console.log("loading error");
        return <p>loading error</p>;
    }
  }

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
