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
        <div className="container mx-auto">HERO</div>
      </section>

      <section>
        <div className="container mx-auto">page teaser blocks (képzések, szaktanácsadás)</div>
      </section>

      <section>
        <div className="container mx-auto">Bio section</div>
      </section>

      <section>
        <div className="container">
          <h2 className="uppercase text-center md:text-4xl pb-3 mb-auto font-cormorant_sc">Kiemelt posztok</h2>

          <div className="blogpost_card">
            {nodes.map((node, index) => (
              <article
                className={`flex flex-1  items-center container mx-auto pb-16 overflow-x-hidden  md:flex-wrap lg:flex-nowrap ${
                  index % 2 ? '' : 'flex items-center flex-row-reverse container mx-auto pb-16 overflow-x-hidden'
                }`}
                key={node.id}
              >
            
                <div className={`blogpost_card__text ${
                  index % 2 ? '' : 'blogpost_card__text--invert'
                }`}
                key={node.id}>

                  <div className="px-8">
                  <span className="blogpost_card__text__brand">BRAND</span>
                  <span className="text-gray-500">{node._createdAt}</span>
                  <h2 className="mt-2 text-2xl font-bold font-cormorant_sc">{node.title}</h2>
                  <hr className="w-8 mt-3 h-1 opacity-25"></hr>
                  <div className="prose py-6 font-sans">
                    <PortableText
                      value={node._rawSummary}
                      // components={/* optional object of custom components to use */}
                    />
                  </div>
                  <Link className="black_button" to={`/post/${node.slug.current}`}>
                    Tovább
                  </Link>
                  </div>
               </div>
         

                <div className={`blogpost_card__image order-1 ${
                  index % 2 ? '' : 'blogpost_card__image--invert'
                }`}
                key={node.id}>
                <GatsbyImage
                  image={node.mainImage.asset.gatsbyImageData}
                  alt={node.title}
                  className="rounded-full aspect-square"
                />
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Blogposts {
    allSanityPost(sort: { _createdAt: DESC }, limit: 2) {
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

export const Head = () => <title>Wine&Sofi &mdash; terroir by Laposa Zsófia</title>;
