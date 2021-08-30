import React from "react"; // importing FunctionComponent

import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { Card } from "../../components/Card";
import { motion } from "framer-motion";

import { createClient } from "contentful";
import Link from "next/link";

//import dateFormat from "dateformat";

import { Page } from "../../components/Page";

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
      <main
        className="w-full ml-auto text-primarygrey dark:text-codewhite"
        role="main"
      >
        <Header isHomePage={true} />
        <Page id="posts" variant="LIGHT">
          {/* <p className="flex justify-center w-full text-2xl text-codewhite">
          Loading...
        </p> */}
        </Page>
      </main>
    );
  }

  if (posts.length === 0) {
    return (
      <>
        <main
          className="w-full ml-auto text-primarygrey dark:text-codewhite"
          role="main"
        >
          <Header isHomePage={false} />
          <Page id="posts" variant="LIGHT">
            <div className="w-full font-sans text-center">
              <p className="pb-3">No posts at this time! Check back later :)</p>
              {/* <Link to="/">
                <p className="pt-3 transform hover:scale-110">
                  <b>Back to home ></b>
                </p>
              </Link> */}
            </div>
          </Page>
        </main>
      </>
    );
  }

  function formatDate(date: Date) {
    date = new Date(date);
    //return dateFormat(date, "fullDate");
    return "need to fix dateformat";
  }

  return (
    <>
      {/* Metadata */}
      <Head>
        <title>Blog | Nathan Davenport&apos;s Portfolio</title>
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

        <link rel="canonical" href="https://nathandaven.com/posts" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Blog | Nathan Davenport's Portfolio"
        />
        <meta
          property="og:description"
          content="Nathan Davenport is an aspiring front-end developer, UI/UX designer, and Georgia Tech student located in Midtown, Atlanta."
        />
        <meta property="og:image" content="/resources/profile.jpeg" />
        <meta property="og:url" content="https://nathandaven.com/posts" />
        <meta
          property="og:site_name"
          content="Blog | Nathan Davenport's Portfolio"
        />

        <meta
          name="twitter:title"
          content="Blog | Nathan Davenport's Portfolio"
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

      <Page variant="LIGHT" id="posts">
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
          <div className="my-20 w-full text-left">
            <h1 className="text-4xl pb-10">
              <b>Check out my most recent posts!</b>
            </h1>
            <h4 className="py-2 text-2xl">Pick my brain for a bit:</h4>
          </div>
        </motion.div>
        <div className="mb-10">
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
              <Card variant="LIGHT" key={post.fields.title.toString()}>
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
                      /* as={`/posts/${post.fields.slug}`} */
                    >
                      <button className="w-full px-6 py-2 mx-2 my-1 rounded-md bg-green-600 hover:bg-green-700  text-white  text-md font-sans drop-shadow-md">
                        Read More &gt;
                      </button>
                    </Link>
                    {/* 
                    <Link
                      href={"/posts/" + post.fields.slug}
                      passHref
                      post={post}
                      title={post.fields.title}
                    >
                      <button className="w-full px-6 py-2 mx-2 my-1 rounded-md bg-green-600 hover:bg-green-700  text-white  text-md font-sans drop-shadow-md">
                        Read More &gt;
                      </button>
                    </Link> */}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className=""></div>
      </Page>

      <Footer />
    </>
  );
};

export default Posts;
