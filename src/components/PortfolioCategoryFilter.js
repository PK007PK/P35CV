import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default function PortfolioCategoryFilter() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___name], order: ASC }
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

  const categories = data.allMarkdownRemark.nodes;

  return (
    <div>
      <Link to="/programming/" activeStyle={{ color: 'red' }} partiallyActive>
        <span className="name">All posts</span>
      </Link>
      <br />
      {categories.map((category) => (
        <Link
          to={`/programming/${category.frontmatter.slug}/1`}
          activeStyle={{ color: 'red' }}
          partiallyActive
          key={category.frontmatter.slug}
        >
          {category.frontmatter.name}
        </Link>
      ))}
    </div>
  );
}
