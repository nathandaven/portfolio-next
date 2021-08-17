import React, { FunctionComponent } from "react"; // importing FunctionComponent
import classNames from "classnames";

import { motion } from "framer-motion";

// Resources
import Image from "next/image";
import DownArrow from "../public/resources/down-arrow.svg";
import DownArrowLight from "../public/resources/down-arrow-light.svg";

// Props (type checked) -- use ? to make a prop optional
type Props = {
  className?: string;
  id?: string;
};

// exporting component with OPTIONAL children
export const Continue: FunctionComponent<Props> = ({
  className,
  id,
  children,
}) => {
  return (
    <>
      <div className={classNames("", className)} id={id}>
        <div className="w-full sm:pt-10 pb-10">
          <div className="flex justify-center items-center text-center pt-10">
            <p>Continue your quest below:</p>
          </div>
          <div className="flex justify-center items-center text-center py-3 mix-blend-difference">
            <motion.div
              animate={{ y: 20 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8,
              }}
            >
              <Image src={DownArrowLight} alt="Down arrow" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

// Example usage
const el = <Continue />;
