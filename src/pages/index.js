import React from 'react';
import { Link, graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';

export default function HomePage({ data }) {
  const nodes = data.allSanityPost.nodes;

  return (
    <Layout>
      <section>
        <div className='container mx-auto'>
          HERO
        </div>
      </section>

      <section>
        <div className='container mx-auto'>
          page teaser blocks (képzések, szaktanácsadás)
        </div>
      </section>

      <section>
        <div className='container mx-auto'>
          Bio section
        </div>
      </section>

      <section className='w-full'>
        <div className='container py-16 bg-gray_light flex flex-col items-center justify-between gap-6'>
          <h1 className='font-cormorant_sc uppercase text-3xl font-bold leading-7 text-button_black'>közelgő események</h1>
          <div className='flex flex-wrap justify-center gap-10 mt-8'>
            <div id='card' className='flex items-center justify-end gap-8 px-6 bg-white border-[1px] border-gray'>
              <div className='flex flex-col items-start justify-around pt-6 pb-4 w-52'>
                <h3 className='font-sans text-sm leading-4 tracking-widest uppercase px-[10px] py-[4px] rounded-[4px] text-white bg-brown_strong'>képzés</h3>
                <h2 className='font-cormorant_sc text-3xl font-bold uppercase mt-2 text-button_black'>wine&roof</h2>
                <p className='font-sans text-sm leading-7 capitalize text-gray_strong'>Badacsonytomaj</p>
                <p className='font-sans text-sm leading-7 capitalize text-gray_strong'>Helyszín</p>
              </div>
              <div className='bg-gray flex flex-col items-center w-20 h-20 rounded-full -mt-40'>
                <h1 className='font-kaushan text-4xl leading-[52px] text-button_black -mb-4 mt-2'>18</h1>
                <p className='font-sans text-sm leading-7 text-button_black'>aug</p>
              </div>
            </div>
            <div id='card' className='flex items-center justify-end gap-8 px-6 bg-white border-[1px] border-gray'>
              <div className='flex flex-col items-start justify-around pt-6 pb-4 w-52'>
                <h3 className='font-sans text-sm leading-4 tracking-widest uppercase px-[10px] py-[4px] rounded-[4px] text-white bg-blue'>tanácsadás</h3>
                <h2 className='font-cormorant_sc text-3xl font-bold uppercase mt-2 text-button_black'>esemény neve</h2>
                <p className='font-sans text-sm leading-7 capitalize text-gray_strong'>város</p>
                <p className='font-sans text-sm leading-7 capitalize text-gray_strong'>helyszín</p>
              </div>
              <div className='bg-gray flex flex-col items-center w-20 h-20 rounded-full -mt-40'>
                <h1 className='font-kaushan text-4xl leading-[52px] text-button_black -mb-4 mt-2'>20</h1>
                <p className='font-sans text-sm leading-7 text-button_black'>szept</p>
              </div>
            </div>
            <div id='card' className='flex items-center justify-end gap-8 px-6 bg-white border-[1px] border-gray'>
              <div className='flex flex-col items-start justify-around pt-6 pb-4 w-52'>
                <h3 className='font-sans text-sm leading-4 tracking-widest uppercase px-[10px] py-[4px] rounded-[4px] text-white bg-green'>szőlészet</h3>
                <h2 className='font-cormorant_sc text-3xl font-bold uppercase mt-2 text-button_black'>esemény neve</h2>
                <p className='font-sans text-sm leading-7 capitalize text-gray_strong'>Badacsonytomaj</p>
                <p className='font-sans text-sm leading-7 capitalize text-gray_strong'>Helyszín</p>
              </div>
              <div className='bg-gray flex flex-col items-center w-20 h-20 rounded-full -mt-40'>
                <h1 className='font-kaushan text-4xl leading-[52px] text-button_black -mb-4 mt-2'>20</h1>
                <p className='font-sans text-sm leading-7 text-button_black'>szept</p>
              </div>
            </div>
          </div>
          <button className='bg-button_black text-white text-sm font-sans font-[600] tracking-[2px] uppercase gap-3 px-5 py-3 rounded-3xl cursor-pointer mt-4'>további események</button>
        </div>
      </section>

      <section>
        <div className='container mx-auto'>
          Blogposts


          {nodes.map((node, index) => (
            <article className={`pb-8 flex flex-row gap-24 ${index % 2 ? '' : 'sm:flex-row-reverse'}`} key={node.id}>
              <div className="sm:w-3/4">
                <h2 className="text-xl font-bold">{node.title}</h2>
                <span className="text-gray-500">{node._createdAt}</span>
                <div className="prose max-w-none py-6">
                  <PortableText
                    value={node._rawSummary}
                  // components={/* optional object of custom components to use */}
                  />
                </div>

                <Link to={`/post/${node.slug.current}`}>Tovább</Link>
              </div>

              <div className="hidden sm:block sm:w-1/4">
                <GatsbyImage
                  image={node.mainImage.asset.gatsbyImageData}
                  alt={node.title}
                  className="rounded-full aspect-square "
                />
              </div>

            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
};

export const query = graphql`
  query Blogposts {
    allSanityPost(
      sort: { _createdAt: DESC }
      limit: 2
    ) {
      nodes {
        id
        title
        _createdAt(formatString: "YYYY.MM.DD")
        mainImage {
          asset {
            gatsbyImageData
          }
        }
        slug {
          current
        }
        _rawSummary(resolveReferences: {maxDepth: 2})
      }
    }
  }
`;

export const Head = () => <title>Wine&Sofi &mdash; terroir by Laposa Zsófia</title>
