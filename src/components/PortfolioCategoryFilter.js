import React, { useContext } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useLocation } from '@reach/router';

import AppContext from '../AppProvider';

export default function PortfolioCategoryFilter({ selectTargetId, id }) {
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

  const { pl } = useContext(AppContext);
  const categories = data.allMarkdownRemark.nodes;
  const location = useLocation();
  const urlTest = '(programming/[0-9])';
  return (
    <div id={id}>
      <Link
        to={`/programming/1${selectTargetId ? `#${selectTargetId}` : ''}`}
        style={
          new RegExp(urlTest).test(location.pathname)
            ? { fontWeight: 'bold', color: '#212529' }
            : { color: '#212529' }
        }
      >
        <span> {pl ? 'Wszystkie projekty' : 'All projects'}</span>
      </Link>
      <div className="mt-1 text-muted">
        {pl ? 'Kategorie:' : 'Categories:'}
        {categories.map((category) => (
          <Link
            to={`/programming/${category.frontmatter.slug}/1${
              selectTargetId ? `#${selectTargetId}` : ''
            }`}
            className="ml-3"
            key={category.frontmatter.slug}
            style={
              new RegExp(`/${category.frontmatter.slug}/`).test(
                location.pathname
              )
                ? { fontWeight: 'bold', color: '#212529' }
                : { color: '#212529' }
            }
          >
            {category.frontmatter.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
