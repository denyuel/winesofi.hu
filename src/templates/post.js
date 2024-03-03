import React from 'react';
import { graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
import Layout from '../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function BlogPost({ data }) {
  const post = data.sanityPost;
  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold">{post.title}</h1>

        <GatsbyImage image={post.mainImage.asset.gatsbyImageData} alt={post.title} />

        <div className="prose max-w-none">
          <PortableText
            value={post._rawSummary}
          // components={/* optional object of custom components to use */}
          />
        </div>

        <div className="prose max-w-none">
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
