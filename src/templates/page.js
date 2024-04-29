import React from 'react';
import { graphql } from 'gatsby';
import { PortableText, toPlainText } from '@portabletext/react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import ContactForm from '../components/contact-form';

export default function Page({ data }) {
  const post = data.sanityPage;
  return (
    <Layout>
      <div>
        <div className='bg-narrow-hero w-full min-h-28 bg-cover'></div>
        <div className='container mx-auto px-4 pb-8'>
          <h1 className='title text-4xl my-8'>{post.title}</h1>
          <div className='h-px w-10 opacity-20 bg-button_black mr-auto my-4'></div>
          <div className="prose max-w-none bold-text my-8">
            <PortableText
              value={post._rawSummary}
            // components={/* optional object of custom components to use */}
            />
          </div>
          <div className="prose max-w-none basic-text mt-14">
            <PortableText
              value={post._rawBody}
            // components={/* optional object of custom components to use */}
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </Layout>
  )
};

export const query = graphql`
  query MyQuery($id: String) {
    sanityPage(id: {eq: $id}) {
      id
      title
      _createdAt
      _updatedAt
      _rawBody(resolveReferences: {maxDepth: 5})
      slug {
        current
      }
      _rawSummary(resolveReferences: {maxDepth: 2})
    }
  }
`;

export function Head({ data }) {
  const page = data.sanityPage;
  return (
    <SEO title={page.title} description={toPlainText(page._rawSummary)} />
  )
};
