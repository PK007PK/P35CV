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
  const urlTest = "(programming/[0-9])"

  return (
    
    // todo dodać wersje językowe

    <nav id={id} aria-label="Portfolio pagination" className={className}>
      <ul className="pagination">
        <li className="page-item">
          <Link
            title="Prev Page"
            className="page-link text-info"
            disabled={!hasPrevPage}
            // disabled using pointer-events: none in css

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
              style={`${base}/${i >= 0 ? i + 1 : ''}`=== location.pathname ? {fontWeight: "bold", color: "#33b5e5"} : {color: "#33b5e5"}}
            >
              {i + 1}
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link
            title="Next Page"
            disabled={!hasNextPage}
            className="page-link text-info"
            to={`${base}/${nextPage}${selectTargetId ? `#${selectTargetId}` : ""}`}
          >
            <span className="word">Next</span> →
          </Link>
        </li>
      </ul>
    </nav>
  );
}
