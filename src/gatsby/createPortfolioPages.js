import path from 'path';
import projectConfig from '../projectConfig';

export async function createPortfolioPages({ graphql, actions, reporter }) {
  // Define a template for blog post
  const projectTemplate = path.resolve(`./src/templates/blog-post.js`);

  // Get all markdown blog posts sorted by date
  const { data } = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/portfolio/i" } }
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          totalCount
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  );

  if (data.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      data.errors
    );
    return;
  }

  const posts = data.allMarkdownRemark.nodes;

  // Create blog posts pages

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].id;

      actions.createPage({
        path: post.fields.slug,
        component: projectTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }

  // Create pagination
  const pageSize = projectConfig.pagesAmountInSet;
  const excerciseSize = projectConfig.pagesAmountInSet;
  const pageCount = Math.ceil(data.allMarkdownRemark.totalCount / pageSize);

  // Loop from 1 to n and create the pages for them
  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/programming/${i + 1}`,
      component: path.resolve('./src/pages/programming.js'),
      context: {
        skip: i * pageSize,
        skipExcercises: i * excerciseSize,
        currentPage: i + 1,
        pageSize,
        pageType: 'allPaginatedPosts',
        dirName: `/programming`,
      },
    });
  });
}
