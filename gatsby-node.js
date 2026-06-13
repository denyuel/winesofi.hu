/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const templates = {
    page: path.join(__dirname, 'src/templates/page.js'),
    blog: path.join(__dirname, 'src/templates/blog-listing.js'),
    blogEn: path.join(__dirname, 'src/templates/en/blog-listing.js'),
    post: path.join(__dirname, 'src/templates/post.js')
  };

  const result = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          nodes {
            id
            frontmatter {
              title
              date
              slug
              language
              image
              summary
            }
            fileAbsolutePath
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panic('error loading content', result.errors);
    return;
  }

  const allNodes = result.data.allMarkdownRemark.nodes;
  const posts = allNodes.filter(node => node.fileAbsolutePath.includes('/src/content/blog/'));
  const pages = allNodes.filter(node => node.fileAbsolutePath.includes('/src/content/pages/'));

  // create pages
  pages.forEach((node) => {
    if (!node.frontmatter.slug) return;
    actions.createPage({
      path: node.frontmatter.slug,
      component: require.resolve(templates.page),
      context: {
        id: node.id,
        title: node.frontmatter.title,
      },
    });
  });

  // create blog posts
  posts.forEach((node) => {
    if (!node.frontmatter.slug) return;
    actions.createPage({
      path: node.frontmatter.slug,
      component: require.resolve(templates.post),
      context: {
        id: node.id,
        title: node.frontmatter.title,
      },
    });
  });

  // Create blog-list pages
  const postsPerPage = 100;
  
  // Create Hungarian blog-list pages
  const huPosts = posts.filter(post => post.frontmatter.language === 'hu' || !post.frontmatter.language);
  const huNumPages = Math.ceil(huPosts.length / postsPerPage) || 1;
  Array.from({ length: huNumPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: templates.blog,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: huNumPages,
        currentPage: i + 1,
        language: 'hu',
      },
    });
  });

  // Create English blog-list pages
  const enPosts = posts.filter(post => post.frontmatter.language === 'en');
  if (enPosts.length > 0) {
    const enNumPages = Math.ceil(enPosts.length / postsPerPage);
    Array.from({ length: enNumPages }).forEach((_, i) => {
      actions.createPage({
        path: i === 0 ? `/en/blog` : `/en/blog/${i + 1}`,
        component: templates.blogEn,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages: enNumPages,
          currentPage: i + 1,
          language: 'en',
        },
      });
    });
  }
};
