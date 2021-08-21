import React, { FunctionComponent } from "react"; // importing FunctionComponent
import classNames from "classnames";

// Props (type checked) -- use ? to make a prop optional
type Props = {
  className?: string;
  id?: string;
  text: string;
};

// exporting component with OPTIONAL children
export const Title: FunctionComponent<Props> = ({
  className,
  id,
  text,
  children,
}) => {
  return (
    <>
      <div className={classNames("", className)} id={id}>
        <div className="py-20 pb-10">
          <div className="text-left flex">
            <h1 className="text-6xl font-bold">{text}:</h1>
          </div>
          <p className="font-mono pt-6 text-left">
            <span className="text-codepink">import</span> &#123; {text} &#125;
            <span className="text-codepink"> from </span>
            &quot;nathandaven&quot;;
          </p>
          <p className="pt-6 text-left font-sans">{children}</p>
        </div>
      </div>
    </>
  );
};

// Example usage
const el = <Title text="text" />;
