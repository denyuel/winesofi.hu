import React from 'react';
import { graphql, Link } from 'gatsby';
import { PortableText, toPlainText } from '@portabletext/react';
import Layout from '../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Seo } from '../components/seo';

export default function BlogPost({ data }) {
  const post = data.sanityPost;
  return (
    <Layout>
      <div className='bg-narrow-hero w-full min-h-28 bg-cover'></div>
      <div className='container mx-auto md:px-4'>
        <nav className='py-6 text-sm'>
          <ul>
            <li className='inline-block pr-2'>
              <Link to="/" className='text-orange hover:underline'>Kezdőlap</Link>
            </li>
            <li className='inline-block pr-2'>›</li>
            <li className='inline-block pr-2'>
              <Link to="/blog" className='text-orange hover:underline'>Blog</Link>
            </li>
            <li className='inline-block pr-2'>›</li>
            <span>{post.title}</span>
          </ul>
        </nav>


        <div className='flex justify-around container mx-auto md:py-10 flex-col-reverse md:flex-row gap-12'>
          <div className='md:flex-1 px-4 md:px-0'>
            <div className='flex items-center gap-3 mb-3'>
              <span className='bg-brown py-1 px-[10px] text-white rounded font-open font-semibold text-xs uppercase'>szőlészet blog</span>
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
          <GatsbyImage className='md:flex-1 md:rounded-full w-full my-1 md:max-w-80 md:max-h-80 aspect-square md:-mb-24' image={post.mainImage.asset.gatsbyImageData} alt={post.title} />
        </div>
        <div className='w-full h-0 border-b-[1px] border-button_black border-opacity-20'></div>
        <div className='container mx-auto py-10 md:pt-24 px-4 md:px-0'>
          <div className="prose prose-h2:font-cormorant prose-h2:text-[28px] prose-h2:leading-7 prose-h2:font-bold text-sm leading-6 font-normal font-open max-w-none">
            <PortableText
              value={post._rawBody}
            // components={/* optional object of custom components to use */}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
};

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
    <Seo title={post.title} image={post.mainImage.asset.gatsbyImageData.images.fallback.src} description={toPlainText(post._rawSummary)} />
  )
};
