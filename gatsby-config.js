/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Wine&Sofi | Egyedi borok egy badacsonyi butikborászatból`,
    description: `Természetközeli butikborászat Badacsony szívében, a Balaton mellett. Egyedi
    borok, számozott tételek, Kéknyelű különlegességek, borkóstolók, borászati kurzusok, és
    szaktanácsadás.`,
    image: `/logo.png`,
    siteUrl: 'https://winesofi.hu'
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": "./src/content/blog/"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "contentPages",
        "path": "./src/content/pages/"
      }
    },
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
    }
  ]
};
