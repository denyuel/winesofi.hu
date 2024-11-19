import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";

export default function Borok() {
  const data = useStaticQuery(graphql`
    query MyStaticQuery {
      allShopifyProduct(limit: 10) {
        edges {
          node {
            id
            title
            description
            onlineStorePreviewUrl
          }
        }
      }
    }
  `);

  const nodes = data.allShopifyProduct.edges.map((edge) => edge.node);

  return (
    <Layout>
      <main>
        <h1 className="text-3xl font-bold mb-8">Borok</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="bg-white border border-gray-300 rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <h2 className="text-lg font-semibold mb-4">{node.title}</h2>
              <p className="text-sm text-gray-600 mb-6">{node.description}</p>
              <a class="button h-9" href={node.onlineStorePreviewUrl}>Webshopba</a>
              )}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
