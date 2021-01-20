import React from "react"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"
import { PageContext } from "../components/layout"
import Jumbo from "../components/jumbo"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBadge,
  MDBBtn,
} from "mdbreact"

import { programmingPageContent, iconBar } from "../data/programmingPageContent"

const Programowanie = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const jumbotronImg = data.placeholderImage.childImageSharp.fluid

  return (
    <Layout lang={location && location.state && location.state.lang}>
      <PageContext.Consumer>
        {({ pl }) => (
          <>
            <SEO title={pl ? "Programowanie" : "Programming"} />
            <Jumbo
              title={"Piotr Krasny"}
              subtitle={
                pl
                  ? programmingPageContent.title[0]
                  : programmingPageContent.title[1]
              }
              text={
                pl
                  ? programmingPageContent.description[0]
                  : programmingPageContent.description[1]
              }
              bottomBar={iconBar}
              style={{
                backgroundColor: "#f5f5f5",
                boxShadow: "none",
                minHeight: "550px",
              }}
              imgSource={jumbotronImg}
            />
            <MDBContainer>
              <ol style={{ listStyle: `none`, paddingLeft: 0 }}>
                {posts.map(post => {
                  const fluid =
                    post.frontmatter.thumbnail &&
                    post.frontmatter.thumbnail.childImageSharp.fluid

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
                  } = post.frontmatter

                  let allTagsInPost = []
                  allTagsInPost = tags.split(",")

                  return (
                    <li key={post.fields.slug}>
                      <MDBRow className="justify-content-between mb-5">
                        <MDBCol md="7">
                          <MDBCard className="post-list-item mb-0">
                            <Image className="card-img" fluid={fluid} />
                            <MDBCardBody
                              className=""
                              style={{ backgroundColor: "rgb(245, 245, 245)" }}
                            >
                              <MDBCardTitle className="">
                                {pl ? title : titleEng}
                              </MDBCardTitle>
                              <MDBCardText className="">
                                <small className="">{date}</small>
                              </MDBCardText>
                              <MDBCardText className="">
                                {pl ? description : descriptionEng}
                              </MDBCardText>
                            </MDBCardBody>
                            <div className="card-footer blue-grey lighten-5">
                              {showMore && (
                                <Link
                                  to={post.fields.slug}
                                  className="btn btn-sm indigo white-text"
                                  itemProp="url"
                                >
                                  <span itemProp="headline">
                                    {pl ? "Więcej" : "More"}
                                  </span>
                                </Link>
                              )}
                              {live && (
                                <MDBBtn
                                  href={live}
                                  target="_blank"
                                  color="indigo"
                                  rel="noopener noreferrer"
                                  className="btn btn-sm"
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
                          </MDBCard>
                        </MDBCol>
                        <MDBCol md="4" className="mt-4 mt-md-0">
                          {allTagsInPost.map((item, index) => (
                            <MDBBadge
                              key={index}
                              color="light"
                              className="mb-3 mr-3"
                              style={{ boxShadow: "none" }}
                            >
                              <MDBIcon
                                style={{ fontSize: "1rem" }}
                                size="lg"
                                icon="hashtag"
                              />
                              <span style={{ fontSize: "1rem" }}>{item}</span>
                            </MDBBadge>
                          ))}
                        </MDBCol>
                      </MDBRow>
                    </li>
                  )
                })}
              </ol>
            </MDBContainer>
          </>
        )}
      </PageContext.Consumer>
    </Layout>
  )
}

export default Programowanie

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          # date(formatString: "MMMM DD, YYYY")
          date(formatString: "YYYY-MM-DD")
          title
          titleEng
          description
          descriptionEng
          tags
          showMore
          live
          githubRepo
          thumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          react
          gatsby
          bootstrap
          mdbootstrap
          netlify
          netlifyCms
        }
      }
    }
    placeholderImage: file(relativePath: { eq: "pkinf1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
