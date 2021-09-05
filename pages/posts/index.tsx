import React from "react"; // importing FunctionComponent

import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { Card } from "../../components/Card";
import { motion } from "framer-motion";

import { createClient } from "contentful";
import Link from "next/link";

import { Page } from "../../components/Page";

import { Meta } from "../../components/Meta";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_SECRET!,
});

const Posts: NextPage = () => {
  const [posts, setPosts] = React.useState([] as any);

  React.useEffect(() => {
    let shouldCancel = false;
    const call = async () => {
      const response = await client.getEntries({ content_type: "page" });
      if (!shouldCancel && response) {
        setPosts(response.items);
      }
    };
    call();
    return () => {
      shouldCancel = true;
    };
  }, []);

  if (!posts) {
    return (
      <>
        {/* Metadata */}
        <Meta
          title={"Blog | Nathan Davenport's Portfolio"}
          description={
            "Nathan Davenport's blog about various interests. He doesn't really know what he's doing, but he does have something to say!"
          }
          link={"https://nathandaven.com/posts"}
        />

        {/* Content */}
        <main
          className="w-full ml-auto text-primarygrey dark:text-codewhite"
          role="main"
        >
          <Header isHomePage={true} />
          <Page id="posts" variant="LIGHT">
            <div className="w-full flex justify-center">
              <FontAwesomeIcon icon={faCircleNotch} spin />
            </div>
          </Page>
        </main>
      </>
    );
  }

  if (posts.length === 0) {
    return (
      <>
        {/* Metadata */}
        <Meta
          title={"Blog | Nathan Davenport's Portfolio"}
          description={
            "Nathan Davenport's blog about various interests. He doesn't really know what he's doing, but he does have something to say!"
          }
          link={"https://nathandaven.com/posts"}
        />

        {/* Content */}
        <main
          className="w-full ml-auto text-primarygrey dark:text-codewhite"
          role="main"
        >
          <Header isHomePage={false} />
          <Page id="posts" variant="LIGHT">
            <div className="w-full font-sans text-center">
              <p className="pb-3">No posts at this time! Check back later :)</p>
            </div>
          </Page>
        </main>
      </>
    );
  }

  function formatDate(date: Date) {
    var dateFormat = require("dateformat");
    date = new Date(date);

    return dateFormat(date, "fullDate");
  }

  return (
    <>
      {/* Metadata */}
      <Meta
        title={"Blog | Nathan Davenport's Portfolio"}
        description={
          "Nathan Davenport's blog about various interests. He doesn't really know what he's doing, but he does have something to say!"
        }
        link={"https://nathandaven.com/posts"}
      />

      {/* Content */}
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
              <b>POSTS</b>
            </div>
            <div className="text-xl md:text-2xl w-full ">
              <p>Pick my brain for a bit:</p>
            </div>
          </div>
        </motion.div>
        <div className="w-full pt-10">
          <div className="grid grid-cols-1  gap-8">
            {posts.map((post: any) => (
              <motion.div
                key={post.fields.title.toString()}
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
                <Card
                  variant="LIGHT"
                  key={post.fields.title.toString()}
                  hideWindowButtons={true}
                  className="py-4 pb-6"
                >
                  <div className="flex flex-col md:flex-row justify-between py-6">
                    <div className="flex flex-col md:flex-row justify-start text-left font-sans">
                      <img
                        className="w-full md:w-48 h-full rounded-lg shadow-lg object-cover"
                        src={post.fields.logo.fields.file.url}
                        alt="Post logo"
                      />
                      <div className="md:pl-6 pt-6 md:pt-0">
                        <h1 className="text-2xl">
                          <b>{post.fields.title}</b>
                        </h1>
                        <h2 className="text-xl">
                          <span>{formatDate(post.sys.updatedAt)}</span>
                        </h2>
                        <p className="pt-4">{post.fields.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center  pt-6 md:pt-0 md:pr-2">
                      <Link
                        href={`/posts/${post.fields.slug}`}
                        passHref
                        /* as={`/posts/${post.fields.slug}`} */
                      >
                        <button className="w-full px-6 py-2 mx-2 my-1 rounded-md bg-green-600 hover:bg-green-700  text-white  text-md font-sans drop-shadow-md">
                          Read More &gt;
                        </button>
                      </Link>
                    </div>
                  </div>
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

export default Posts;
