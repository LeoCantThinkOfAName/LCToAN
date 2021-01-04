import { Link } from "gatsby-plugin-intl";
import React from "react";

import SEO from "../components/SEO";
import TransitionContainer from "../components/TransitionContainer";

const SecondPage: React.FC = () => (
  <TransitionContainer>
    <SEO title="Page two" description="hello" meta={[]} />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </TransitionContainer>
);

export default SecondPage;
