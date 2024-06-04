/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({ path: './sanity_studio/.env' });

module.exports = {
  siteMetadata: {
    title: `Wine&Sofi | Egyedi borok egy badacsonyi butikborászatból`,
    description: `Természetközeli butikborászat Badacsony szívében, a Balaton mellett. Egyedi
    borok, számozott tételek, Kéknyelű különlegességek, borkóstolók, borászati kurzusok, és
    szaktanácsadás.`,
    image: `/logo.png`,
    siteUrl: 'https://winesofi.hu'
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      projectId: process.env.SANITY_STUDIO_PROJECT_ID,
      dataset: process.env.SANITY_STUDIO_DATASET
    }
  },
  {
    resolve: "gatsby-plugin-sanity-image",
    options: {
      projectId: process.env.SANITY_STUDIO_PROJECT_ID,
      dataset: process.env.SANITY_STUDIO_DATASET
    },
  },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
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
