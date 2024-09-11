import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/en/layout';
import BlogList from '../../components/en/blog-list';
import { Seo } from '../../components/seo';

export default function Blog({ data }) {
  const nodes = data.allSanityPost.nodes;
  return (
    <Layout>
      <div className='bg-narrow-hero w-full min-h-28 bg-cover'></div>

      <div className='container mx-auto px-4 pb-8'>
        <h1 className='title text-4xl my-8 text-center'>Blog</h1>
        <BlogList nodes={nodes} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($skip: Int!, $limit: Int!, $language: String = "en") {
    allSanityPost(
      sort: { _createdAt: DESC }
      limit: $limit
      skip: $skip
      filter: {language: {eq: $language}}
    ) {
      nodes {
        id
        title
        mainImage {
          asset {
            gatsbyImageData
          }
        }
        _createdAt(formatString: "YYYY.MM.DD")
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

export const Head = () => (
<Seo title="Wine&Sofi | News, Wine Blog, Updates" description="News, winemaking content from Badacsony, near Lake Balaton, from a unique boutique winery." pathname="/en/blog" />
)
