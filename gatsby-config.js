/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({ path: './sanity_studio/.env' });

module.exports = {
  siteMetadata: {
    title: `Wine&Sofi &mdash; terroir by Laposa Zsófia`,
    description: `Lorem ipsum...`,
    image: `/logo.png`,
    siteUrl: 'https://winesofi.hu'
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      projectId: process.env.SANITY_STUDIO_PROJECT_ID,
      dataset: process.env.SANITY_STUDIO_DATASET,
    }
  },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     "trackingId": ""
    //   }
    // },
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};
