import path from 'path';
import projectConfig from '../projectConfig';

export async function turnPortfolioCategoriesIntoPages({ graphql, actions }) {
  // 1. Get the template
  const categoryTemplate = path.resolve('./src/pages/programming.js');

  // 2. query all the categories
  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/portfolioCategory/i" } }
      ) {
        nodes {
          frontmatter {
            name
            slug
          }
        }
      }
    }
  `);

  // 3. createPage
  data.allMarkdownRemark.nodes.forEach((category) => {
    async function countPost() {
      const selectCategory = `"/${category.frontmatter.slug}/"`;

      const categoryDetails = await graphql(`
          query myQuery {
            allMarkdownRemark(
              filter: {
                fileAbsolutePath: { regex: "/portfolioProjects/" }
                frontmatter: { portfolioCategory: { regex: ${selectCategory} } }
              }
            ) {
              totalCount
            }
          }
        `);
      return categoryDetails;
    }

    countPost().then((result) => {
      const pageSize = projectConfig.pagesAmountInSet;
      const allPostsInCategory = result.data.allMarkdownRemark.totalCount;
      const pageCount = Math.ceil(allPostsInCategory / pageSize);
      const excerciseSize = projectConfig.excercisesAmountInSet;

      Array.from({ length: pageCount }).forEach((_, i) => {
        actions.createPage({
          path: `programming/${category.frontmatter.slug}/${i + 1}`,
          component: categoryTemplate,
          context: {
            skip: i * pageSize,
            skipExcercises: i * excerciseSize,
            excerciseSize,
            currentPage: i + 1,
            pageSize,
            selectPosts: `/${category.frontmatter.slug}/i`,
            sellectionName: category.frontmatter.name,
            pageType: 'allPostsInCategory',
            dirName: `/programming/${category.frontmatter.slug}`,
          },
        });
      });
    });
  });
}
