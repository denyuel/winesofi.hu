import React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../../components/en/layout';
import BlogList from '../../components/en/blog-list';
import { Seo } from '../../components/seo';

export default function HomePage({ data }) {
  const { nodes } = data.allSanityPost;

  return (
    <Layout>
      <section>
        <Link to="/en/wines">
          <div className="flex flex-col justify-center w-full h-auto bg-hero bg-cover">
            <div className="flex justify-center gap-2 mt-12 md:gap-8 -mb-16 md:-mb-32 md:mt-16 w-full wine-container">
              <div className="flex flex-col items-center max-w-full">
                <StaticImage
                  className="h-auto w-28 md:w-72 -mb-16 md:-mb-36 z-10"
                  src="../../images/bor3.png"
                  alt="kéknyelű 2021"
                  placeholder="blurred"
                />
                <div className="flex flex-col justify-end items-center gap-1 w-11/12 md:size-circle bg-blue rounded-full opacity-90 text-xxs md:text-xs z-5 p-2 md:p-6 aspect-square circle">
                  <span>Wine&Sofi</span>
                  <div className="border-t-2 border-button_black w-10 opacity-20"></div>
                  <span>kéknyelű</span>
                  <span className="text-xxs md:text-sm">
                    202<span className="text-xxxs md:text-xs">1</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center max-w-full">
                <StaticImage
                  className="h-auto w-28 md:w-72 -mb-16 md:-mb-36 z-10"
                  src="../../images/bor1.png"
                  alt="olaszrizling 2022"
                  placeholder="blurred"
                />
                <div className="flex flex-col justify-end items-center gap-1 w-11/12 md:size-circle bg-brown rounded-full opacity-90 text-xxs md:text-xs z-5 p-2 md:p-6 aspect-square circle">
                  <span>Wine&Sofi</span>
                  <div className="border-t-2 border-button_black w-10 opacity-20"></div>
                  <span>olaszrizling</span>
                  <span className="text-xxs md:text-sm">
                    202<span className="text-xxxs md:text-xs">2</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center max-w-full">
                <StaticImage
                  className="h-auto w-28 md:w-72 -mb-16 md:-mb-36 z-10"
                  src="../../images/bor2.png"
                  alt="olaszrizling 2022"
                  placeholder="blurred"
                />
                <div className="flex flex-col justify-end items-center gap-1 w-11/12 md:size-circle bg-green rounded-full opacity-90 text-xxs md:text-xs z-5 p-2 md:p-6 aspect-square circle">
                  <span>Wine&Sofi</span>
                  <div className="border-t-2 border-button_black w-10 opacity-20"></div>
                  <span>olaszrizling</span>
                  <span className="text-xs md:text-sm">
                    202<span className="text-xxs md:text-xs">2</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-2 items-center px-4 md:px-60 mt-28 md:mt-48 container mx-auto">
          <h1 className="text-3xl md:text-4xl text-center title">Wine&Sofi Wine Boutique</h1>
          <div className="border-t-2 border-gray w-10"></div>
          <p className="basic-text text-center">
            Wine&Sofi is not just a winery: it's about nature, Badacsony, and Lake Balaton. It showcases a unique place
            where the volcanic soil creates irreplaceable, unique wines. Each bottle, produced in small quantities and
            individually numbered, captures the expertise of the boutique winery and the magic of terroir.
          </p>
          <div className="flex gap-3 justify-center pt-7">
            <Link to="/en/wines" className="button h-9">
              Wine Boutique
            </Link>
          </div>
        </div>
      </section>

      <section className="my-16 bg-gradient-to-r from-orange to-orange_strong">
        <div className="container mx-auto bg-[url('../images/index-bg-object.png')] bg-no-repeat bg-teaser px-4">
          <div className="flex flex-wrap justify-center xl:gap-8 flex-col sm:flex-row">
            <div className="flex items-center sm:gap-8 flex-col-reverse sm:flex-row sm:py-16">
              <div className="relative left-6 bottom-10 sm:left-0 sm:bottom-0 z-20 text-right w-64">
                <h2 className="font-cormorant_sc text-3xl font-bold leading-7 tracking-normal text-button_black">
                  Winery
                </h2>
                <h3 className="font-kaushan text-4xl leading-11 tracking-normal text-white">Education</h3>
                <div className="h-px w-10 opacity-20 bg-button_black ml-auto"></div>
                <p className="font-sans text-sm leading-7 text-wrap text-button_black opacity-60 pb-4">
                  Unique winemaking courses for groups of 4-8 people.
                </p>
                <div className="relative mr-0 sm:-mr-24 mt-0 sm:mt-4">
                  <Link className="button" to="/boraszat-kepzesek">
                    DETAILS
                  </Link>
                </div>
              </div>
              <StaticImage
                className="teaser-img relative sm:right-0 z-10 mt-8 sm:mt-0 mb-0"
                src="../../images/index-post-left.jpg"
                alt="Wine&Sofi egyedi borkülönlegesség"
                placeholder="blurred"
              />
            </div>
            <div className="flex items-center sm:gap-8 flex-col sm:flex-row sm:py-16">
              <StaticImage
                className="teaser-img sm:left-0 my-0"
                src="../../images/index-post-right.jpg"
                alt="Szőlő a Badacsonyból"
                placeholder="blurred"
              />
              <div className="relative z-20 w-64 text-right sm:text-left left-6 bottom-10 sm:left-0 sm:bottom-0">
                <h2 className="font-cormorant_sc text-3xl font-bold leading-7 tracking-normal text-button_black">
                  Winery
                </h2>
                <h3 className="font-kaushan text-4xl leading-11 tracking-normal text-white">Consultancy</h3>
                <div className="h-px w-10 opacity-20 bg-button_black ml-auto sm:mr-auto sm:ml-0"></div>
                <p className="font-sans text-sm leading-7 text-wrap text-button_black opacity-60 pb-4">
                  Personalised winemaking consultancy.
                </p>
                <div className="relative -ml-24 mt-4">
                  <Link className="button" to="/boraszat-tanacsadas">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 pt-4 sm:py-16 bg-bio bg-contain bg-right bg-no-repeat">
        <div className="container mx-auto flex flex-wrap items-center justify-evenly bg-contain px-4 max-w-7xl gap-8 md:gap-12 sm:flex-row-reverse">
          <div className="">
            <StaticImage
              className="rounded-full h-76 w-76"
              src="../../images/index-bio-photo.jpg"
              alt="Laposa Zsófia borász"
              placeholder="blurred"
            />
          </div>
          <div className="w-full sm:flex-1">
            <h1 className="font-kaushan text-4xl leading-11 tracking-normal text-orange">Zsófia Laposa</h1>
            <h3 className="font-cormorant_sc text-3xl font-bold leading-7 tracking-normal uppercase text-button_black">
            WINEMAKER
            </h3>
            <div className="h-px w-10 opacity-20 bg-button_black mr-auto my-4"></div>
            <p className="font-sans text-sm leading-7 text-wrap text-button_black opacity-60 pb-4">
            Welcome! I'm Zsófi, the founder of WineSofi boutique winery. I've gained experience in winemaking around the world. I completed my professional studies at the University of Valencia, and Bordeaux. Additionally, I have worked in California, Burgundy, Alsace, Bordeaux, Northern Italy, and at Laposa Estate, which was then a family business. In 2021, I decided to forge my own path, leading to the creation of WineSofi in Badacsony, a boutique winery producing unique wines. "Humans are part of nature and the cycle of life, where we create and build. This pulsating cyclicality can be experienced in our bodies, through changes in the weather, and even in moments of birth and death. A glass of wine reflects the climate, the soil, the hours of sunshine, the peculiarities of the vintage, the winemaker's labour, and nature itself. Since each vintage is unique, every wine is different. A person achieves harmony with themselves when they are in harmony with nature." I hope that my unique wines convey my passion and respect for nature.
            </p>
            <div className="flex flex-row justify-center sm:justify-normal mt-2">
              <Link className="button" to="/en/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 mt-8">
          <h2 className="uppercase text-center text-2xl sm:text-3xl md:text-4xl pb-3 mb-auto font-cormorant_sc">
          FEATURED POSTS
          </h2>
          <BlogList nodes={nodes} />
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
query Blogposts {
  allSanityPost(
    sort: { _createdAt: DESC }
    limit: 2
    filter: { language: { eq: "en" } }
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
      _rawSummary(resolveReferences: { maxDepth: 2 })
    }
  }
}
`;


export const Head = () => <Seo />;
