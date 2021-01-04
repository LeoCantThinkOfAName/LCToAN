import { WorkQuery } from "../../generated/graphql-type";
import { WorksData } from "../types";

const worksDataTransformer = (data: WorkQuery): WorksData[] => {
  const {
    allMarkdownRemark: { nodes },
  } = data;
  const works: WorksData[] = [];

  nodes.forEach(({ frontmatter, html }) => {
    works.push({
      title: frontmatter?.title || "",
      url: frontmatter?.url || "",
      thumbnail: frontmatter?.thumbnail?.childImageSharp?.fluid || undefined,
      description: html || "",
      imgs:
        frontmatter && frontmatter.imgs && frontmatter.imgs.length > 0
          ? frontmatter.imgs.map((img) => {
              if (img && img.childImageSharp && img.childImageSharp.fluid) {
                return img.childImageSharp.fluid;
              }
              return undefined;
            })
          : [],
    });
  });
  return works;
};

export default worksDataTransformer;
