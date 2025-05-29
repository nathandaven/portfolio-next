import React, { FunctionComponent } from "react"; // importing FunctionComponent
import classNames from "classnames";

// Variants
const VARIANT_MAPS: Record<string, string> = {
  DARK: "bg-primarygrey dark:bg-primarygrey text-codewhite",
  LIGHT:
    "bg-codewhitedark text-primarygrey dark:bg-darkgrey dark:text-codewhite",
  CIRCLE: "bg-circlebgfull bg-no-repeat bg-local bg-contain bg-top",
};

// Props (type checked) -- use ? to make a prop optional
type Props = {
  id: string;
  variant?: string;
  className?: string;
};

// exporting component with OPTIONAL children
export const Page: FunctionComponent<Props> = ({
  id,
  className,
  variant,
  children,
}) => {
  return (
    <section
      className={classNames(VARIANT_MAPS[variant ? variant : ""], className)}
      id={id}
    >
      <div
        className={classNames(
          "container mx-auto px-4 xl:px-20 min-h-dvh flex justify-around items-baseline text-center flex-col ",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

// Example usage
const el = <Page id="123" variant="LIGHT" />;
