import { createFilePath } from 'gatsby-source-filesystem';
export const createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
  
    createTypes(`
        type SiteSiteMetadata {
            author: Author
            siteUrl: String
            social: Social
        }

        type Author {
            name: String
            summary: String
        }

        type Social {
            twitter: String
        }

        type MarkdownRemark implements Node {
            frontmatter: Frontmatter
            fields: Fields
        }

        type Frontmatter {
            title: String
            description: String
            date: Date @dateformat
        }

        type Fields {
            slug: String
        }
    `)
  };
  
  export const onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
  
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode });
  
      createNodeField({
        name: `slug`,
        node,
        value,
      });
    }
  };
  