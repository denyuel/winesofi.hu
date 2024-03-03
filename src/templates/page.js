import React from 'react';
import { graphql } from 'gatsby';
import { PortableText } from '@portabletext/react';
import Layout from '../components/layout';

export default function Page({ data }) {
  const post = data.sanityPage;
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div className="prose max-w-none">
          <PortableText
            value={post._rawBody}
          // components={/* optional object of custom components to use */}
          />
        </div>
      </div>
    </Layout>
  )
};

export const query = graphql`
  query MyQuery($id: String) {
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
