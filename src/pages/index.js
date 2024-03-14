import React from 'react';
import { Link, graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

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

      <section className='w-full bg-gradient-to-r from-orange to-[#D07C1F]'>
        <div className="container bg-[url('../images/index-bg-object.png')] bg-no-repeat bg-bottom-1">
          <div className='flex flex-wrap justify-center gap-8'>
            <div className='flex items-center gap-8'>
              <div className='relative z-20 text-right w-[16rem]'>
                <h2 className='font-cormorant_sc text-3xl font-bold leading-7 tracking-normal text-button_black'>Borászati</h2>
                <h3 className='font-kaushan text-4xl leading-[52px] tracking-normal text-white'>Képzések</h3>
                <div className='h-[1px] w-[40px] opacity-20 bg-button_black ml-auto'></div>
                <p className='font-sans text-sm leading-7 text-wrap text-button_black opacity-60 pb-4'>Egyedi borászati kurzusok 4-8 fős csoportok részére.</p>
                <button className='bg-button_black text-white text-sm font-sans font-[600] tracking-[2px] uppercase gap-3 px-5 py-3 rounded-3xl cursor-pointer -mr-24 mt-4'>részletek</button>
              </div>
              <StaticImage class='relative z-10 rounded-full h-[16rem] w-[16rem] my-20' src="../images/index-post-left.jpg" alt="index-post-left" placeholder="blurred" />
            </div>
            <div className='flex items-center gap-8'>
              <StaticImage class='rounded-full h-[16rem] w-[16rem] my-20' src="../images/index-post-right.jpg" alt="index-post-right" placeholder="blurred" />
              <div className='relative z-20 w-[16rem]'>
                <h2 className='font-cormorant_sc text-3xl font-bold leading-7 tracking-normal text-button_black'>Szőlészeti</h2>
                <h3 className='font-kaushan text-4xl leading-[52px] tracking-normal text-white'>Szaktanácsadás</h3>
                <div className='h-[1px] w-[40px] opacity-20 bg-button_black mr-auto'></div>
                <p className='font-sans text-sm leading-7 text-wrap text-button_black opacity-60 pb-4'>Lorem ipsum  amet, consectetuer adipiscing elit.</p>
                <button className='bg-button_black text-white text-sm font-sans font-[600] tracking-[2px] uppercase gap-3 px-5 py-3 rounded-3xl cursor-pointer -ml-24 mt-4'>részletek</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto'>
          Bio section
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
