import React, { FunctionComponent } from "react"; // importing FunctionComponent
import Head from "next/head";

// Props (type checked) -- use ? to make a prop optional
type Props = {
  title?: string;
  description?: string;
  link?: string;
  imageURL?: string;
};

// exporting component with OPTIONAL children
export const Meta: FunctionComponent<Props> = ({
  title,
  description,
  link,
  imageURL,
  children,
}) => {
  return (
    <Head>
      <title>{title ? title : "Nathan Davenport – Software Portfolio"}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="apple-touch-icon" href="/logo192.png" />

      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content={
          description
            ? description
            : "Software engineer with 3 years of experience building full-stack applications using TypeScript, React, and Kubernetes. Currently at NCR Voyix."
        }
      />

      <link rel="canonical" href={link ? link : "https://nathandaven.dev"} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={title ? title : "Nathan Davenport's Portfolio"}
      />
      <meta
        property="og:description"
        content={
          description
            ? description
            : "Software engineer with 3 years of experience building full-stack applications using TypeScript, React, and Kubernetes. Currently at NCR Voyix."
        }
      />
      <meta
        property="og:image"
        content={imageURL ? imageURL : "./resources/profile.jpeg"}
      />
      <meta
        property="og:url"
        content={link ? link : "https://nathandaven.dev"}
      />
      <meta
        property="og:site_name"
        content={title ? title : "Nathan Davenport's Portfolio"}
      />

      <meta
        name="twitter:title"
        content={title ? title : "Nathan Davenport's Portfolio"}
      />
      <meta
        name="twitter:description"
        content={
          description
            ? description
            : "Software engineer with 3 years of experience building full-stack applications using TypeScript, React, and Kubernetes. Currently at NCR Voyix."
        }
      />
      <meta
        name="twitter:image"
        content={imageURL ? imageURL : "/resources/profile.jpeg"}
      />
      <meta name="twitter:site" content="@nathandaven" />
      <meta name="twitter:creator" content="@nathandaven" />

      <meta property="profile:first_name" content="Nathan" />
      <meta property="profile:last_name" content="Davenport" />

      <meta property="fb:app_id" content="966242223397117" />

      {/* Additional Tags as children */}
      {children}
    </Head>
  );
};
