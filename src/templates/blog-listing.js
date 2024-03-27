import React from 'react';
import { Link, graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export default function Blog({ data }) {
  const nodes = data.allSanityPost.nodes;
  return (
    <Layout>
        <div className='narrow-hero mb-16'></div>
        <BlogList nodes={nodes} />
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
