import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import { useStaticQuery, graphql } from "gatsby";

export function Figure({ node }) {
  const sanityConfig = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          sanityDataset
          sanityProjectId
        }
      }
    }
  `);

  const { sanityDataset: dataset, sanityProjectId: projectId } = sanityConfig;

  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 800 },
    {
      projectId,
      dataset,
    }
  );

  return (
    <figure>
      <GatsbyImage image={fluidProps} alt={node.alt} />
      {node.caption && <figcaption>{node.caption}</figcaption>}
    </figure>
  );
}
