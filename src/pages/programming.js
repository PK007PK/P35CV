import React, { useContext } from "react"

import { graphql } from "gatsby"

import { PageContext } from "../components/Layout"

import Jumbo from "../components/Jumbo"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

import { programmingPageContent, iconBar } from "../data/programmingPageContent"
import CardProject from "../components/CardProject"

const programming = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const jumbotronImg = data.placeholderImage.childImageSharp.fluid
  const ConfiguredJumbotron = () => {
    const { pl } = useContext(PageContext)
    return (
      <Jumbo
        title={"Piotr Krasny"}
        subtitle={
          pl ? programmingPageContent.title[0] : programmingPageContent.title[1]
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
    )
  }
  const DisplayProjects = () => (
    <ul style={{ listStyle: `none`, paddingLeft: 0 }}>
      {posts.map(post => {
        return (
          <li key={post.fields.slug}>
            <CardProject post={post} className="mb-5" />
          </li>
        )
      })}
    </ul>
  )

  return (
    <Layout lang={location?.state?.lang}>
      <PageContext.Consumer>
        {({ pl }) => (
          <>
            <SEO title={pl ? "Programowanie" : "Programming"} />
            <ConfiguredJumbotron />
            <MDBContainer>
              <MDBRow className="justify-content-between mb-5">
                <MDBCol md="7">
                  <DisplayProjects />
                </MDBCol>
                <MDBCol md="4" className="mt-4 mt-md-0"></MDBCol>
              </MDBRow>
            </MDBContainer>
          </>
        )}
      </PageContext.Consumer>
    </Layout>
  )
}

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

export default programming
