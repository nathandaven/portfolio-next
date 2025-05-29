import React, { FunctionComponent } from "react"; // importing FunctionComponent
import classNames from "classnames";

// Media and Icons
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Props (type checked) -- use ? to make a prop optional
type Props = {
  className?: string;
  id?: string;
};

// exporting component with OPTIONAL children
export const Socials: FunctionComponent<Props> = ({
  className,
  id,
  children,
}) => {
  return (
    <>
      <div className={classNames("flex-1 text-right", className)} id={id}>
        <a
          href="https://www.instagram.com/nathandaven"
          target="_blank"
          rel="noreferrer"
          className="text-xl pl-2"
        >
          <FontAwesomeIcon
            className="transform hover:scale-110"
            icon={faInstagram}
          />
        </a>
        <a
          href="https://www.github.com/nathandaven"
          className="text-xl motion-safe:hover:scale-110  pl-2"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="transform hover:scale-110"
            icon={faGithub}
          />
        </a>

        <a
          href="https://www.twitter.com/nathandaven"
          className="text-xl motion-safe:hover:scale-110  pl-2"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="transform hover:scale-110"
            icon={faTwitter}
          />
        </a>
        <a
          href="https://www.youtube.com/@nathandaven"
          className="text-xl motion-safe:hover:scale-110  pl-2"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="transform hover:scale-110"
            icon={faYoutube}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/nathandaven"
          className="text-xl motion-safe:hover:scale-110  pl-2"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="transform hover:scale-110"
            icon={faLinkedin}
          />
        </a>
        <a
          href="mailto:work@nathandaven.com"
          className="text-xl motion-safe:hover:scale-110  pl-2"
        >
          <FontAwesomeIcon
            className="transform hover:scale-110"
            icon={faEnvelope}
          />
        </a>
      </div>
    </>
  );
};

// Example usage
const el = <Socials />;
