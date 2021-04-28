import React, { useContext, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import AppContext from '../AppProvider';
import ExternaLinkLikeButton from './ExternaLinkLikeButton';
import AllTags from './AllTags';

export default function Excercises({ base }) {
  const { pl } = useContext(AppContext);

  const data = useStaticQuery(graphql`
    query MyQuery($skip: Int = 0) {
      allMarkdownRemark(
        limit: 3
        skip: $skip
        filter: { fileAbsolutePath: { regex: "/exercises/.*.md$/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              titleEng
              excerciseCategory
              description
              descriptionEng
              tags
              live
              githubRepo
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: '190px' }}
      >
        <h2 className="h5 text-center">
          {pl ? 'Drobne projekty' : 'Small projects'}
        </h2>

        <div className="text-center">
          {pl
            ? 'Dema / Startery / Prototypy / Ćwiczenia / Snippety'
            : 'Demos / Boilerplates / Proof of concept / Excercises / Snippets'}
        </div>
      </div>
      <ul style={{ listStyle: `none`, paddingLeft: 0 }}>
        {base.map((item, index) => {
          const {
            title,
            titleEng,
            excerciseCategory,
            description,
            descriptionEng,
            tags,
            githubRepo,
            live,
            date,
          } = item.node.frontmatter;

          let color;
          switch (excerciseCategory) {
            case 'demo':
              color = `blue-grey darken-1`;
              break;
            case 'boilerplate':
              color = `grey darken-1`;
              break;
            case 'excercise':
              color = `grey darken-3`;
              break;
            default:
              color = `stylish-color-dark`;
          }

          return (
            <li key={index}>
              <div
                className={`card border-dark mb-5 text-white `.concat(color)}
              >
                <div className="card-body text-dark ">
                  <h5 className="card-title text-center text-white">
                    {pl ? title : titleEng}
                  </h5>
                  <div className="card-text text-white my-3 d-flex justify-content-between">
                    <small className="">{date}</small>
                    <small className="">{excerciseCategory}</small>
                  </div>
                  <p className="card-text text-white">
                    {pl ? description : descriptionEng}
                  </p>
                </div>
                <div className="card-footer">
                  <AllTags tags={tags} />
                </div>
                <div className="card-footer">
                  {live && (
                    <ExternaLinkLikeButton link={live} className="ml-0 ">
                      Live
                    </ExternaLinkLikeButton>
                  )}
                  {githubRepo && (
                    <ExternaLinkLikeButton link={githubRepo}>
                      Github
                    </ExternaLinkLikeButton>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
