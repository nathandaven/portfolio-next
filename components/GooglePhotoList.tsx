import React, { FunctionComponent } from "react"; // importing FunctionComponent
import classNames from "classnames";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";

import InfiniteScroll from "react-infinite-scroll-component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";

import { Page } from "./Page";

import { View } from "../pages/photobook/[slug]";

//import ImageViewer from "react-simple-image-viewer";

import ImageViewer from "../components/ImageViewer";
import Slug from "../pages/photobook/[slug]";

// Props (type checked) -- use ? to make a prop optional
type Props = {
  galleryID: string;
  view: View;
  cropPreviews: boolean;
  className?: string;
  id?: string;
};

// exporting component with OPTIONAL children
export const GooglePhotoList: FunctionComponent<Props> = ({
  galleryID,
  view,
  cropPreviews,
  className,
  id,
  children,
}) => {
  const [images, setImages] = React.useState([]);
  const [loadedImages, setLoadedImages] = React.useState([]);

  React.useEffect(() => {
    let shouldCancel = false;
    const call = async () => {
      const response = await axios.get(
        "https://simple-vine-knife.glitch.me/" + galleryID
      );

      if (!shouldCancel && response.data && response.data.length > 0) {
        let fetched = response.data.reverse();
        setImages(fetched);
        setLoadedImages(fetched.splice(0, view));
      }
    };
    call();
    return () => {
      shouldCancel = true;
    };
  }, [galleryID, view]);

  const fetchMoreData = () => {
    setLoadedImages(loadedImages.concat(images.splice(0, view)));
  };

  // React image viewer

  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    document.body.style.overflow = "";
  };

  if (galleryID) {
    return loadedImages && images ? (
      <div className="w-full ">
        <InfiniteScroll
          loader={
            <div className="w-full flex justify-center text-5xl py-10">
              <FontAwesomeIcon icon={faCircleNotch} spin />
            </div>
          }
          dataLength={images.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={true}
          scrollThreshold={0.95}
        >
          <div
            className={
              view === View.LIST
                ? "grid gap-4 grid-cols-1 "
                : view === View.GRIDSMALL
                ? "grid gap-4 grid-cols-1 lg:grid-cols-2"
                : "grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4"
            }
          >
            {loadedImages.map((src, index) => (
              <motion.div
                key={index}
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
                <div
                  className="text-center justify-center h-full flex justify-content-center flex-col "
                  key={index}
                >
                  {/* <Image
                  className=" relative py-4 w-full"
                  width={100}
                  height={100}
                  src={`${src}=w1200`}
                  alt="Retrieved from Google Photos"
                  key={index}
                /> */}
                  <img
                    className={classNames(
                      " w-full cursor-pointer object-cover ",
                      cropPreviews ? "min-h-full" : ""
                    )}
                    src={`${src}=w1200`}
                    alt="Retrieved from Google Photos"
                    loading="lazy"
                    key={index}
                    onClick={() => openImageViewer(index)}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </InfiniteScroll>

        {isViewerOpen && (
          <ImageViewer
            src={loadedImages}
            backgroundStyle={{}}
            currentIndex={currentImage}
            onClose={closeImageViewer}
          />
        )}
      </div>
    ) : (
      <Page id="loading">
        <div className="w-full flex justify-center text-5xl">
          <FontAwesomeIcon icon={faCircleNotch} spin />
        </div>
      </Page>
    );
  } else {
    return (
      <Page id="loading">
        <div className="w-full flex justify-center text-5xl">
          <FontAwesomeIcon icon={faCircleNotch} spin />
        </div>
      </Page>
    );
  }
};
