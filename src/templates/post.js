import React from 'react';
import { graphql } from 'gatsby';
import { PortableText, toPlainText } from '@portabletext/react';
import Layout from '../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SEO } from '../components/seo';

export default function BlogPost({ data }) {
  const post = data.sanityPost;
  return (
    <Layout>
      <div className='narrow-hero w-full'></div>
      <div className='flex justify-around container mx-auto md:py-10 flex-col-reverse md:flex-row'>
        <div className=''>
          <div className='flex items-center gap-3 mb-3'>
            <button className='bg-brown py-1 px-[10px] text-white rounded font-open font-semibold text-xs uppercase'>szőlészet</button>
            <p className='font-light font-open text-xs'>{post._createdAt}</p>
          </div>
          <h1 className="text-4xl font-bold font-cormorant leading-9 pb-6">{post.title}</h1>
          <div className='h-0 border-b border-button_black border-opacity-20 w-10'></div>
          <div className="prose max-w-none bold-text py-6">
            <PortableText
              value={post._rawSummary}
            // components={/* optional object of custom components to use */}
            />
          </div>
        </div>
        <GatsbyImage className='md:rounded-full w-full my-1 md:w-96 h-96 md:-mb-24' image={post.mainImage.asset.gatsbyImageData} alt={post.title} />
      </div>
      <div className='w-full h-0 border-b-[1px] border-button_black border-opacity-20'></div>
      <div className='container mx-auto py-10'>
        <div className="prose prose-h2:font-cormorant prose-h2:text-[28px] prose-h2:leading-7 prose-h2:font-bold text-sm leading-6 font-normal font-open max-w-none">
          <PortableText
            value={post._rawBody}
          // components={/* optional object of custom components to use */}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($id: String) {
    sanityPost(id: {eq: $id}) {
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
`;

export function Head({ data }) {
  const post = data.sanityPost;
  return (
    <SEO title={post.title} image={post.mainImage.asset.gatsbyImageData.images.fallback.src} description={toPlainText(post._rawSummary)} />
  )
}
