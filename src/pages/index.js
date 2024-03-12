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
          <h2 className="uppercase font-bold text-center md:text-4xl pb-3 mb-auto">Kiemelt posztok</h2>

          <div className="border-black border-solid border-2 justify-center items-center gap-24 ">
            {nodes.map((node, index) => (
              <article className={`pb-8 flex border-red border-solid border-2 my-20 mx-20 bg-gray_strong ${index % 2 ? '' : 'sm:flex-row-reverse'}`} key={node.id}>
                

                <div className="sm:w-2/4 pl-10 pt-10 md:pt-0 md:pb-10 bg-gray">
              
                  <span className="text-white uppercase bg-amber-400 rounded p-1 mr-1">BRAND</span>
                  <span className="text-gray-500">{node._createdAt}</span>
                  <h2 className="text-2xl font-bold">{node.title}</h2>
                  <hr className="w-8 mt-3 h-1 opacity-25"></hr>
                  <div className="prose py-6">
                    <PortableText
                      value={node._rawSummary}
                      // components={/* optional object of custom components to use */}
                    />
                  </div>
                  <Link
                    className="bg-black text-white uppercase gap-3 px-5 py-3 rounded-2xl"
                    to={`/post/${node.slug.current}`}
                  >
                    Tovább
                  </Link>
                  </div>
             

                <div className="hidden sm:block sm:w-1/4">
                  
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
