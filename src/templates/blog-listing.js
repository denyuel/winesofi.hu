import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import BlogList from '../components/blog-list';
import { Seo } from '../components/seo';
import { useLanguage } from '../context/LanguageContext';

export default function Blog({ data }) {
  const nodes = data.allMarkdownRemark.nodes;
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
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
      filter: {
        fileAbsolutePath: { regex: "/src/content/blog/" }
        frontmatter: { language: { eq: $language } }
      }
    ) {
      nodes {
        id
        frontmatter {
          title
          language
          date(formatString: "YYYY.MM.DD")
          slug
          summary
          image
        }
      }
    }
  }
`;

export const Head = () => (
  <Seo title="Wine&Sofi | Hírek, borblog, aktualitások" description="Hírek, borászati tartalmak a Badacsonyból, a Balaton mellől, egy különleges butikborászatból." pathname="/blog" />
)
