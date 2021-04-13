import React, { useContext } from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

import AppContext from '../AppProvider';

import ExternaLinkLikeButton from './ExternaLinkLikeButton';
import AllTags from './AllTags';

export default function CardProject({ post, className }) {
  const { pl } = useContext(AppContext);
  const {
    title,
    titleEng,
    description,
    descriptionEng,
    tags,
    showMore,
    githubRepo,
    live,
    date,
  } = post.frontmatter;
  const fluid = post.frontmatter.thumbnail?.childImageSharp?.fluid;

  return (
    <div className={`card post-list-item mb-0 ${className}`}>
      <Image className="card-img" fluid={fluid} />
      <div
        className="card-body"
        style={{ backgroundColor: 'rgb(245, 245, 245)' }}
      >
        <h3 className="card-title">{pl ? title : titleEng}</h3>
        <div className="card-text">
          <small className="mb-5">{date}</small>
        </div>
        <div className="card-text" style={{ color: '#1C2331' }}>
          {pl ? description : descriptionEng}
        </div>
      </div>
      <div
        className="card-footer"
        style={{ backgroundColor: 'rgb(245, 245, 245)' }}
      >
        <AllTags tags={tags} />
      </div>
      <div className="card-footer blue-grey lighten-5">
        <div className="d-flex justify-content-between">
          <div>
            {showMore && (
              <Link
                to={post.fields.slug}
                className="btn btn-sm indigo white-text"
                itemProp="url"
              >
                <span itemProp="headline">{pl ? 'Więcej' : 'More'}</span>
              </Link>
            )}
            {live && (
              <ExternaLinkLikeButton link={live} className="ml-0">
                Live
              </ExternaLinkLikeButton>
            )}
            {githubRepo && (
              <ExternaLinkLikeButton link={githubRepo}>
                Github
              </ExternaLinkLikeButton>
            )}
          </div>
          <ExternaLinkLikeButton
            link={`https://developers.google.com/speed/pagespeed/insights/?url=${live}&tab=desktop`}
            className="bg-success"
          >
            Speed test
          </ExternaLinkLikeButton>
        </div>
      </div>
    </div>
  );
}
