import React, { useContext } from "react"
import { graphql } from "gatsby"
import AppContext from '../AppProvider';

import Jumbo from "../components/Jumbo"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import CardProject from "../components/CardProject"
import Excercises from "../components/Exercises"

import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdbreact"
import { programmingPageContent, iconBar } from "../data/programmingPageContent"

const ProgrammingPage = ({ data, location }) => {
  const { pl } = useContext(AppContext);
  
  const posts = data.allMarkdownRemark.nodes
  const jumbotronImg = data.placeholderImage.childImageSharp.fluid
  
  const ConfiguredJumbotron = () => {
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
      <SEO title={pl ? "Programowanie" : "Programming"} />
      <ConfiguredJumbotron />
      <MDBContainer>
        <MDBRow className="justify-content-between mb-5">
          <MDBCol md="7">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "80px" }}
            >
              <MDBTypography
                tag="h2"
                variant="h3"
                className="text-center m-0"
              >
                {pl ? "Projekty" : "Projects"}
              </MDBTypography>
            </div>
            <DisplayProjects />
          </MDBCol>
          <MDBCol md="4" className="mt-4 mt-md-0">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "80px" }}
            >
              <MDBTypography
                tag="h2"
                variant="h5"
                className="text-center m-0"
              >
                {pl
                  ? "Dema / Startery / Prototypy / Ćwiczenia / Snippety"
                  : "Demos / Boilerplates / Proof of concept / Excercises / Snippets"}
              </MDBTypography>
            </div>
            <Excercises />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
          
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/.*.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
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

export default ProgrammingPage
