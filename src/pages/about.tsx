import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import React from "react";

import { AboutQuery } from "../../generated/graphql-type";
import SEO from "../components/SEO";
import TransitionContainer from "../components/TransitionContainer";

export const query = graphql`
  query About {
    allMarkdownRemark(filter: { frontmatter: { page: { eq: "about" } } }) {
      nodes {
        frontmatter {
          language
        }
        html
      }
    }
  }
`;

interface AboutProps {
  data: AboutQuery;
}

export const AboutPage: React.FC<AboutProps> = ({ data }) => {
  const {
    allMarkdownRemark: { nodes },
  } = data;
  const intl = useIntl();
  const locale = intl.locale;
  const filtered = nodes.filter((node) => {
    const frontmatter = node.frontmatter;
    if (frontmatter?.language === locale) return node;
  });
  const content = filtered.length > 0 ? filtered[0] : null;

  return (
    <TransitionContainer>
      <SEO
        title={intl.formatMessage({ id: "meta.title.AboutPage" })}
        description={intl.formatMessage({ id: "meta.description.AboutPage" })}
      />
      <article
        dangerouslySetInnerHTML={{
          __html: content ? (content.html ? content.html : "") : "",
        }}
      />
    </TransitionContainer>
  );
};

export default AboutPage;
