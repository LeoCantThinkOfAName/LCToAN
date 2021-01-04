import React from "react";

import SEO from "../components/SEO";
import TransitionContainer from "../components/TransitionContainer";

const NotFoundPage: React.FC = () => (
  <TransitionContainer>
    <SEO title="404: Not found" description="" meta={[]} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </TransitionContainer>
);

export default NotFoundPage;
