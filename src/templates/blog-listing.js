import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import BlogList from '../components/blog-list';
import { Seo } from '../components/seo';
import { useLanguage } from '../context/LanguageContext';

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
  query MyQuery($skip: Int!, $limit: Int!, $language: String = "hu") {
    allSanityPost(
      sort: { _createdAt: DESC }
      limit: $limit
      skip: $skip
      filter: { language: { eq: $language } }
    ) {
      nodes {
        id
        title
        language
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
  <Seo title="Wine&Sofi | Hírek, borblog, aktualitások" description="Hírek, borászati tartalmak a Badacsonyból, a Balaton mellől, egy különleges butikborászatból." pathname="/blog" />
)
