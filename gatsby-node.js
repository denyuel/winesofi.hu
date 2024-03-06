/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path');

exports.createPages = async ({ actions, graphql, reporter, cache }) => {

  const templates = {
    page: path.join(__dirname, 'src/templates/page.js'),
    blog: path.join(__dirname, 'src/templates/blog-listing.js'),
    post: path.join(__dirname, 'src/templates/post.js')
  };

  const result = await graphql(
    `{
      allSanityPost(sort: {_createdAt: DESC}, limit: 100) {
        nodes {
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
      allSanityPage {
        totalCount
        nodes {
          id
          slug {
            current
          }
          _rawSummary(resolveReferences: {maxDepth: 2})
          _rawBody(resolveReferences: {maxDepth: 5})
          title
        }
      }
    }
    `
  );

  if (result.errors) {
    reporter.panic('error loading content', result.errors);
    return;
  }

  await cache.set('docskit_site_allSanity_data', result);

  // create pages
  result.data.allSanityPage.nodes.forEach((node) => {
    actions.createPage({
      path: node.slug.current,
      component: require.resolve(templates.page),
      context: {
        id: node.id,
        title: node.title
      }
    });
  });

  // create blog posts
  result.data.allSanityPost.nodes.forEach((node) => {
    const slug = `/post/${node.slug.current}`;
    actions.createPage({
      path: slug,
      component: require.resolve(templates.post),
      context: {
        id: node.id,
        title: node.title
      }
    });
  });

  // Create blog-list pages
  const posts = result.data.allSanityPost.nodes;
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: templates.blog,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
};
