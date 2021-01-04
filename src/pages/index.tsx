import { useIntl } from "gatsby-plugin-intl";
import React from "react";

import SEO from "../components/SEO";
import TransitionContainer from "../components/TransitionContainer";

export const IndexPage: React.FC = () => {
  const intl = useIntl();

  return (
    <TransitionContainer>
      <SEO
        title={intl.formatMessage({ id: "meta.title.IndexPage" })}
        description={intl.formatMessage({ id: "meta.description.IndexPage" })}
      />
      <div>
        <h1>Leo Can't Think of A name.</h1>
      </div>
    </TransitionContainer>
  );
};

export default IndexPage;
