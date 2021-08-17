import React, { FunctionComponent } from "react"; // importing FunctionComponent
import classNames from "classnames";

// Props (type checked) -- use ? to make a prop optional
type Props = {
  className?: string;
  id?: string;
};

// exporting component with OPTIONAL children
export const GenericComponent: FunctionComponent<Props> = ({
  className,
  id,
  children,
}) => (
  <>
    <div className={classNames("", className)} id={id}>
      {children}
    </div>
  </>
);

// Example usage
const el = <GenericComponent />;
