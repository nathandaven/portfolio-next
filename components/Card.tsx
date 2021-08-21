import React, { FunctionComponent } from "react"; // importing FunctionComponent
import classNames from "classnames";

// Media
import Image from "next/image";
import WindowButtons from "../public/resources/window-buttons.svg";

const VARIANT_MAPS: Record<string, string> = {
  DARK: "bg-secondarygrey text-codewhite",
  LIGHT:
    "bg-codewhite text-primarygrey dark:bg-secondarygrey dark:text-codewhite",
};

// Props (type checked) -- use ? to make a prop optional
type Props = {
  className?: string;
  variant?: string;
  id?: string;
};

// exporting component with OPTIONAL children
export const Card: FunctionComponent<Props> = ({
  className,
  id,
  variant,
  children,
}) => {
  return (
    <>
      <div
        className={classNames(
          "text-left w-full rounded-md shadow-xl my-2 p-8 h-full",
          VARIANT_MAPS[variant ? variant : ""],
          className
        )}
        id={id}
      >
        <div className="z-10">
          <Image src={WindowButtons} alt="Close, maximize, minimize buttons" />
        </div>
        <div className=" pt-4 filter font-mono">
          {/* Content */}
          {children}
        </div>
      </div>
    </>
  );
};

// Example usage
const el = <Card />;
