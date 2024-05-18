import React from 'react';
import { graphql } from 'gatsby';
import { PortableText, toPlainText } from '@portabletext/react';
import SanityImage from 'gatsby-plugin-sanity-image';
import Layout from '../components/layout';
import { Seo } from '../components/seo';
import ContactForm from '../components/contact-form';
import imageGallery from '../components/imageGallery';

export default function Page({ data }) {
  const post = data.sanityPage;
  const portableTextComponents = {
    types: {
      image: ({ value }) => (<SanityImage {...value} width={1200} className='max-w-5xl max-h-104 w-auto h-auto mx-auto' alt={post.title} />),
      imageGallery: imageGallery
    },
    marks: {
      link: ({ children, value }) => (
        <a href={value.href} className="underline text-orange">
          {children}
        </a>)
    }
  };

  return (
    <Layout>
      <div className='bg-narrow-hero w-full min-h-28 bg-cover'></div>
      <div className='bg-bio bg-contain bg-right-bottom bg-no-repeat'>
        <div className='bg-white bg-opacity-80'>
          <div className='container mx-auto px-4 pb-8'>
            <h1 className='title text-4xl my-8'>{post.title}</h1>
            <div className='h-px w-10 opacity-20 bg-button_black mr-auto my-4'></div>
            <div className="prose max-w-none bold-text my-8">
              <PortableText
                value={post._rawSummary}
              />
            </div>
            <div className="prose max-w-none basic-text mt-14">
              <PortableText
                value={post._rawBody}
                components={portableTextComponents}
              />
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
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
    <Seo title={`${page.title} — Wine&Sofi borászat Badacsony`} description={toPlainText(page._rawSummary)} />
  )
};
