import React, { FunctionComponent } from "react"; // importing FunctionComponent
import classNames from "classnames";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import { RichContent } from "../../components/RichContent";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Page } from "../../components/Page";
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
  id?: string;
};

{
  /* https://nextjs.org/learn/basics/dynamic-routes/page-path-external-data */
}

// exporting component with OPTIONAL children
const Slug: FunctionComponent<Props> = ({ className, id, children }) => {
  const router = useRouter();
  const { slug } = router.query;

  const [data, setData] = React.useState(null as any);

  React.useEffect(() => {
    console.log(slug);
    let shouldCancel = false;
    const call = async () => {
      const response = await client.getEntries({
        content_type: "page",
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
  }, [slug]);

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
      <div className={classNames("", className)} id={id}>
        <Header isHomePage={false} />
        <Page variant="LIGHT" id={data.fields.slug}>
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
            <img
              className="rounded-lg shadow-lg"
              src={data.fields.logo.fields.file.url}
              alt="Post logo"
            />
            <div className="my-10 w-full text-left">
              <h1 className="text-6xl pb-5">
                <b>{data.fields.title}</b>
              </h1>
              <h4 className="py-2 text-2xl">{data.fields.description}</h4>
            </div>
          </motion.div>

          <div className="container text-left ">
            <RichContent content={data.fields.content} />
          </div>

          <div className="pt-20"></div>
        </Page>
        <Footer />
      </div>
    </>
  );
};

export default Slug;
