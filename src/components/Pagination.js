import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
  selectTargetId, 
  id,
  className
}) {
  // make some variables
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  const location = useLocation();

  return (
    
    // todo dodać wersje językowe

    <nav id={id} aria-label="Portfolio pagination" className={className} >
      <ul className="pagination">
        <li className="page-item">
          <Link
            title="Prev Page"
            className="page-link"
            disabled={!hasPrevPage}
            style={{color: "#212529"}}
            to={`${base}/${prevPage}${selectTargetId ? `#${selectTargetId}` : ""}`}
          >
            ← <span className="word">Prev</span>
          </Link>
        </li>
        {Array.from({ length: totalPages }).map((_, i) => (
          <li className="page-item">
            <Link
              className="page-link"
              to={`${base}/${i >= 0 ? i + 1 : ''}${selectTargetId ? `#${selectTargetId}` : ""}`}
              key={`page${i}`}
              style={`${base}/${i >= 0 ? i + 1 : ''}`=== location.pathname ? {fontWeight: "bold", color: "#212529"} : {color: "#212529"}}
            >
              {i + 1}
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link
            title="Next Page"
            disabled={!hasNextPage}
            className="page-link"
            style={{color: "#212529"}}
            to={`${base}/${nextPage}${selectTargetId ? `#${selectTargetId}` : ""}`}
          >
            <span className="word">Next</span> →
          </Link>
        </li>
      </ul>
    </nav>
  );
}
