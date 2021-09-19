// for now
// @ts-ignore
// @ts-nocheck
/* eslint-disable react/display-name */

import React, { FunctionComponent } from "react"; // importing FunctionComponent
import classNames from "classnames";

// Contentful
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

// Props (type checked) -- use ? to make a prop optional
type Props = {
  content: any;
};

const options = {
  renderMark: {
    [MARKS.ITALIC]: (text) => <i>{text}</i>,
    [MARKS.BOLD]: (text) => <b>{text}</b>,
    [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
    [MARKS.CODE]: (text) => <span className="font-mono">{text}</span>,
  },
  [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
    // target the contentType of the EMBEDDED_ENTRY to display as you need
    if (node.data.target.sys.contentType.sys.id === "codeBlock") {
      return (
        <pre>
          <code>{node.data.target.fields.code}</code>
        </pre>
      );
    }

    if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
      return (
        <iframe
          src={node.data.target.fields.embedUrl}
          height="100%"
          width="100%"
          frameBorder="0"
          scrolling="no"
          title={node.data.target.fields.title}
          allowFullScreen={true}
        />
      );
    }
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="py-2 font-sans">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="py-4 font-sans text-4xl">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h1 className="py-4 font-sans text-3xl">{children}</h1>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h1 className="py-4 font-sans text-2xl">{children}</h1>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h1 className="py-4 font-sans text-xl">{children}</h1>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <div className="text-lg bg-codewhite dark:bg-secondarygrey rounded-lg shadow-md px-6 py-6 my-4">
        {children}
      </div>
    ),
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a
          className="hover:underline break-words"
          href={node.data.uri}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    },
  },
  [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
    // render the EMBEDDED_ASSET as you need
    return (
      <img
        src={`https://${node.data.target.fields.file.url}`}
        alt={node.data.target.fields.description}
      />
    );
  },
};

// exporting component with OPTIONAL children
export const RichContent: FunctionComponent<Props> = ({ content }) => {
  return <div>{documentToReactComponents(content, options)}</div>;
};
