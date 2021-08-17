import React, { FunctionComponent } from "react"; // importing FunctionComponent
import { Page } from "../components/Page";

import Image from "next/image";
// MEdia
import SampleImage from "../public/resources/circlebg-full.svg";

type Props = {};

export const Landing: FunctionComponent<Props> = ({ children }) => (
  <Page variant="CIRCLE" id="home">
    <Image src={SampleImage} alt="Portrait of Nathan Davenport" />
  </Page>
);

const el = <Landing />;
