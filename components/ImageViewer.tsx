import React, { CSSProperties, useCallback, useEffect, useState } from "react";
import styles from "./ImageViewer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

// stolen from https://github.com/specter256/react-simple-image-viewer
// customized to my own needs

interface IProps {
  src: string[];
  currentIndex?: number;
  backgroundStyle?: CSSProperties;
  onClose?: () => void;
}

const ImageViewer = (props: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(props.currentIndex ?? 0);

  const handleClick = useCallback(
    (event: any) => {
      if (event.target && event.target.id === "ReactSimpleImageViewer") {
        props.onClose?.();
      }
    },
    [props.onClose]
  );

  const handleKeyDown = useCallback(
    (event: any) => {
      if (event.key === "Escape") {
        props.onClose?.();
      }
    },
    [props.onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      id="ReactSimpleImageViewer"
      className={`${styles.wrapper} react-simple-image-viewer__modal`}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      style={props.backgroundStyle}
    >
      <span
        className={`${styles.close} react-simple-image-viewer__close`}
        onClick={() => props.onClose?.()}
      >
        <FontAwesomeIcon icon={faTimes} />
      </span>
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
              delay: 0.5,
            },
          },
        }}
      >
        <img
          className={styles.image}
          src={`${props.src[currentIndex]}=w2400`}
          alt="Image in the Image Viewer"
        />
        {/* <div
          className={`${styles.content} react-simple-image-viewer__modal-content`}
        >
          <div
            className={`${styles.slide} react-simple-image-viewer__slide`}
          ></div>
        </div> */}
      </motion.div>
    </div>
  );
};

export default ImageViewer;
