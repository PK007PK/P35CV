import { useStaticQuery, graphql } from "gatsby"
import { MDBBtn, MDBIcon, MDBTypography } from "mdbreact"
import React, { useContext } from "react"
import AllTags from "./AllTags"
import { PageContext } from "../components/Layout"

export default function Excercises() {
  const { pl } = useContext(PageContext)
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/exercises/.*.md$/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              titleEng
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
  `)

  return (
    <ul style={{ listStyle: `none`, paddingLeft: 0 }}>
      {data.allMarkdownRemark.edges.map((item, index) => {
        const {
          title,
          titleEng,
          description,
          descriptionEng,
          tags,
          githubRepo,
          live,
          date,
        } = item.node.frontmatter

        return (
          <li key={index}>
            <div class="card border-dark stylish-color mb-5 text-white">
              <div class="card-body text-dark ">
                <h5 class="card-title text-center text-white">
                  {pl ? title : titleEng}
                </h5>
                <div className="card-text text-white mb-2">
                  <small className="">{date}</small>
                </div>
                <p class="card-text text-white">
                  {pl ? description : descriptionEng}
                </p>
              </div>
              <div class="card-footer">
                <AllTags tags={tags} />
              </div>
              <div class="card-footer">
                {live && (
                  <MDBBtn
                    href={live}
                    target="_blank"
                    color="indigo"
                    rel="noopener noreferrer"
                    className="btn btn-sm ml-0"
                    itemProp="url"
                  >
                    Live
                  </MDBBtn>
                )}
                {githubRepo && (
                  <MDBBtn
                    href={githubRepo}
                    target="_blank"
                    color="indigo"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                    itemProp="url"
                  >
                    <span itemProp="headline">Github</span>
                  </MDBBtn>
                )}
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}