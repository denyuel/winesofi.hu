/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({ path: './sanity_studio/.env' });

module.exports = {
  siteMetadata: {
    title: `Wine&Sofi — terroir by Laposa Zsófia`,
    description: `A WineSofi nem csak egy borászat: a természetről és Badacsonyról szól. Bemutat egy egyedi helyet, ahol a vulkáni talaj adta megismételhetetlen borok születnek. Kis mennyiségben készítek számozott tételeket és arra törekszem, hogy minden palackban a terroir varázsa érezhető legyen.`,
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
