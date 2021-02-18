import React, { useContext } from "react"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"

import { PageContext } from "../components/Layout"

import Jumbo from "../components/Jumbo"
import Layout from "../components/Layout"
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
import CardProject from "../components/CardProject"

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
              <ul style={{ listStyle: `none`, paddingLeft: 0 }}>
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

                  return (
                    <li key={post.fields.slug}>
                      <MDBRow className="justify-content-between mb-5">
                        <MDBCol md="7">
                          <CardProject
                            fluid={fluid}
                            title={title}
                            titleEng={titleEng}
                            date={date}
                            description={description}
                            descriptionEng={descriptionEng}
                            showMore={showMore}
                            live={live}
                            githubRepo={githubRepo}
                            post={post}
                            tags={tags}
                          />
                        </MDBCol>
                        <MDBCol md="4" className="mt-4 mt-md-0"></MDBCol>
                      </MDBRow>
                    </li>
                  )
                })}
              </ul>
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
