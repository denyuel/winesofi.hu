import React from 'react';
import { Link, graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export default function Blog({ data }) {
  const nodes = data.allSanityPost.nodes;
  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold">Blog</h1>

        {nodes.map(node => (
          <div className="pb-8" key={node.id}>
            <Link to={`/post/${node.slug.current}`}>
              <h2 className="text-xl font-bold">{node.title}</h2>
            </Link>
            <div className="prose max-w-none">
              <PortableText
                value={node._rawSummary}
              // components={/* optional object of custom components to use */}
              />
            </div>

            <GatsbyImage image={node.mainImage.asset.gatsbyImageData} alt={node.title} />
          </div>
        ))}

      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($skip: Int!, $limit: Int!) {
    allSanityPost(
      sort: { _createdAt: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        title
        mainImage {
          asset {
            gatsbyImageData
          }
        }
        _createdAt
        _updatedAt
        _rawBody(resolveReferences: {maxDepth: 5})
        slug {
          current
        }
        _rawSummary(resolveReferences: {maxDepth: 2})
      }
    }
  }
`;
