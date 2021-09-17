import React, { FunctionComponent } from "react"; // importing FunctionComponent
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

// Props (type checked) -- use ? to make a prop optional
type Props = {
  title: string;
  photoURL: string;
  slug: string;
  className?: string;
  id?: string;
};

// exporting component with OPTIONAL children
export const AlbumCard: FunctionComponent<Props> = ({
  title,
  photoURL,
  slug,
  className,
  id,
  children,
}) => {
  return (
    <>
      <div className={classNames("", className)} id={id}>
        <Link href={`/photobook/${slug.toString()}`} passHref>
          <div className="relative ">
            <div className="absolute text-4xl text-codewhite dark:text-codewhite bg-black bg-opacity-40 cursor-pointer inset-0 z-10 text-center flex flex-col items-center justify-center opacity-100 hover-hover:opacity-0 hover:opacity-100 bg-opacity-60 duration-300">
              <h4>
                <b>{title.toUpperCase()}</b>
              </h4>
            </div>
            <div className="relative rounded-sm   transition-all">
              <img
                className="flex flex-wrap content-center object-cover w-full h-96"
                src={"http:" + photoURL.toString()}
                alt={"Cover photo for album: " + title.toString()}
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

// Example usage
const el = <AlbumCard title="" photoURL="" slug="" />;
