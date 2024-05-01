import React from 'react';
import { graphql } from 'gatsby';
import { PortableText, toPlainText } from '@portabletext/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import Layout from '../components/layout';
import { Seo } from '../components/seo';
import ContactForm from '../components/contact-form';

export default function Page({ data }) {
  const post = data.sanityPage;
  const { sanityDataset: dataset, sanityProjectId: projectId } = data.site.siteMetadata;
  const portableTextComponents = {
    types: {
      image: ({ value }) => {
        const imageData = getGatsbyImageData(value?.asset?._id, { width: 1024 }, { dataset, projectId });
        return <GatsbyImage layout="constrained" className="block mx-auto max-w-5xl" image={imageData} alt={post.title} />;
      },
    },
  };

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
            />
          </div>
          <div className="prose max-w-none basic-text mt-14">
            <PortableText
              value={post._rawBody}
              components={portableTextComponents}
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
    site {
      siteMetadata {
        sanityDataset
        sanityProjectId
      }
    }
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
