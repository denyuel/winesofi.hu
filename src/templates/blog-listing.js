import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import BlogList from '../components/blog-list';

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
