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
        <div className="flex flex-col justify-center w-full h-auto md:min-h-[30rem] hero">
          <div className="flex justify-center gap-2 mt-12 md:gap-8 -mb-16 md:-mb-32 md:mt-16 w-full wine-container">
            <div className="flex flex-col items-center max-w-full">
              <StaticImage className="h-auto -mb-16 md:-mb-36 z-10" src='../images/bor3.png' alt="kéknyelű 2021" />
              <div
                className="flex flex-col justify-end items-center gap-1 w-[90%] md:size-[12.5rem] bg-blue rounded-full opacity-90 text-xxs md:text-xs z-5 p-2 md:p-6 aspect-square circle">
                <span>Wine&Sofi</span>
                <div className="border-t-2 border-button_black w-10 opacity-20"></div>
                <span>kéknyelű</span>
                <span className="text-xxs md:text-sm">202<span className="text-xxxs md:text-xs">1</span></span>
              </div>
            </div>
            <div className="flex flex-col items-center max-w-full">
              <StaticImage className="h-auto -mb-16 md:-mb-36 z-10" src='../images/bor1.png' alt="olaszrizling 2022" />
              <div
                className="flex flex-col justify-end items-center gap-1 w-[90%] md:size-[12.5rem] bg-brown rounded-full opacity-90 text-xxs md:text-xs z-5 p-2 md:p-6 aspect-square circle">
                <span>Wine&Sofi</span>
                <div className="border-t-2 border-button_black w-10 opacity-20"></div>
                <span>olaszrizling</span>
                <span className="text-xxs md:text-sm">202<span className="text-xxxs md:text-xs">2</span></span>
              </div>
            </div>
            <div className="flex flex-col items-center max-w-full">
              <StaticImage className="h-auto -mb-16 md:-mb-36 z-10" src='../images/bor2.png' alt="olaszrizling 2022" />
              <div
                className="flex flex-col justify-end items-center gap-1 w-[90%] md:size-[12.5rem] bg-green rounded-full opacity-90 text-xxs md:text-xs z-5 p-2 md:p-6 aspect-square circle">
                <span>Wine&Sofi</span>
                <div className="border-t-2 border-button_black w-10 opacity-20"></div>
                <span>olaszrizling</span>
                <span className="text-xs md:text-sm">202<span className="text-xxs md:text-xs">2</span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center px-8 md:px-60 mt-28 md:mt-48 w-full">
          <h1 className="text-3xl md:text-4xl title">Vine&Sofi</h1>
          <div className="border-t-2 border-gray w-10"></div>
          <p className="basic-text text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
          <div className="flex gap-3 justify-center pt-7">
            <button
              className="px-5 py-2 bg-button_black rounded-[20px] text-white uppercase text-xs tracking-[2px] font-semibold">
              a pincészet borai
            </button>
          </div>
        </div>
      </section>

      <section className='w-full mt-20 bg-gradient-to-r from-orange to-[#D07C1F]'>
        <div className="container mx-auto bg-[url('../images/index-bg-object.png')] bg-no-repeat bg-teaser">
          <div className='flex flex-wrap justify-center xl:gap-8 flex-col sm:flex-row'>
            <div className='flex items-center sm:gap-8 flex-col-reverse sm:flex-row sm:py-16'>
              <div className='relative left-6 bottom-10 sm:left-0 sm:bottom-0 z-20 text-right w-64'>
                <h2 className='font-cormorant_sc text-3xl font-bold leading-7 tracking-normal text-button_black'>Borászati</h2>
                <h3 className='font-kaushan text-4xl leading-[52px] tracking-normal text-white'>Képzések</h3>
                <div className='h-[1px] w-10 opacity-20 bg-button_black ml-auto'></div>
                <p className='font-sans text-sm leading-7 text-wrap text-button_black opacity-60 pb-4'>Egyedi borászati kurzusok 4-8 fős csoportok részére.</p>
                <button className='bg-button_black text-white text-sm font-sans font-[600] tracking-[2px] uppercase gap-3 px-5 py-3 rounded-3xl cursor-pointer mr-0 sm:-mr-24 mt-0 sm:mt-4'>részletek</button>
              </div>
              <StaticImage class='teaser-img relative sm:right-0 z-10 mt-8 sm:mt-0 mb-0' src="../images/index-post-left.jpg" alt="index-post-left" placeholder="blurred" />
            </div>
            <div className='flex items-center sm:gap-8 flex-col sm:flex-row sm:py-16'>
              <StaticImage class='teaser-img sm:left-0 my-0' src="../images/index-post-right.jpg" alt="index-post-right" placeholder="blurred" />
              <div className='relative z-20 w-64 text-right sm:text-left left-6 bottom-10 sm:left-0 sm:bottom-0'>
                <h2 className='font-cormorant_sc text-3xl font-bold leading-7 tracking-normal text-button_black'>Szőlészeti</h2>
                <h3 className='font-kaushan text-4xl leading-[52px] tracking-normal text-white'>Szaktanácsadás</h3>
                <div className='h-[1px] w-10 opacity-20 bg-button_black ml-auto sm:mr-auto sm:ml-0'></div>
                <p className='font-sans text-sm leading-7 text-wrap text-button_black opacity-60 pb-4'>Lorem ipsum  amet, consectetuer adipiscing elit.</p>
                <button className='bg-button_black text-white text-sm font-sans font-[600] tracking-[2px] uppercase gap-3 px-5 py-3 rounded-3xl cursor-pointer -ml-24 mt-4'>részletek</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full'>
        <div className="flex flex-wrap items-center justify-evenly bg-[url('../images/index-bio-bg.png')] bg-contain bg-no-repeat bg-right-bottom">
          <div className='max-w-[50%]'>
            <h1 className='font-kaushan text-4xl leading-[52px] tracking-normal text-orange'>Laposa Zsófia</h1>
            <h3 className='font-cormorant_sc text-3xl font-bold leading-7 tracking-normal uppercase text-button_black'>borász</h3>
            <div className='h-[1px] w-[40px] opacity-20 bg-button_black mr-auto my-4'></div>
            <p className='font-sans text-sm leading-7 text-wrap text-button_black opacity-60 pb-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus  mus.</p>
            <button className='bg-button_black text-white text-sm font-sans font-[600] tracking-[2px] uppercase gap-3 px-5 py-3 rounded-3xl cursor-pointer -mr-24 mt-4'>kapcsolat</button>
          </div>
          <div className=''>
            <StaticImage class='rounded-full h-[19rem] w-[19rem] my-20' src="../images/index-bio-photo.jpg" alt="index-post-right" placeholder="blurred" />
          </div>
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
