import React from "react"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"
import { LanguageContext } from "../components/layout"
import { programowaniePageTexts } from "../data/programowaniePageTexts"
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
} from "mdbreact"
import JumbotronReus from "../components/JumbotronReus"

const Programowanie = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const jumbotronImg = data.placeholderImage.childImageSharp.fluid

  const iconBar = () => (
    <div className="d-flex justify-content-end">
      <MDBIcon
        color="red"
        fab
        size="3x"
        icon="html5"
        className="mr-3 red-text"
      />
      <MDBIcon fab size="3x" icon="css3-alt" className="mr-3 blue-text" />
      <MDBIcon fab size="3x" icon="sass" className="mr-3 pink-text" />
      <MDBIcon fab size="3x" icon="js" className="mr-3 amber-text" />
      <MDBIcon fab size="3x" icon="react" className="blue-text" />
    </div>
  )

  return (
    <Layout lang={location.state && location.state.lang}>
      <LanguageContext.Consumer>
        {({ pl }) => (
          <>
            <SEO title="Piotr Krasny CV: programowanie" />
            <JumbotronReus
              title={"Piotr Krasny"}
              subtitle={
                pl
                  ? programowaniePageTexts.title[0]
                  : programowaniePageTexts.title[1]
              }
              text={
                pl
                  ? programowaniePageTexts.description[0]
                  : programowaniePageTexts.description[1]
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
                  const title = post.frontmatter.title || post.fields.slug
                  const fluid =
                    post.frontmatter.thumbnail &&
                    post.frontmatter.thumbnail.childImageSharp.fluid
                  const {
                    description,
                    react,
                    gatsby,
                    bootstrap,
                    mdbootstrap,
                    netlify,
                    netlifyCms,
                    githubRepo,
                    live,
                    date,
                  } = post.frontmatter
                  return (
                    <li key={post.fields.slug}>
                      <MDBRow className="justify-content-between mb-5">
                        <MDBCol md="7">
                          <MDBCard className="post-list-item mb-0">
                            <Image className="card-img" fluid={fluid} />
                            <MDBCardBody>
                              <MDBCardTitle>{title}</MDBCardTitle>
                              <MDBCardText className="">
                                <small className="text-muted">{date}</small>
                              </MDBCardText>{" "}
                              <MDBCardText className="">
                                {description}
                              </MDBCardText>{" "}
                            </MDBCardBody>
                            <div className="card-footer">
                              {post.fields.slug && (
                                <Link
                                  to={post.fields.slug}
                                  className="btn btn-sm"
                                  itemProp="url"
                                >
                                  <span itemProp="headline">Więcej</span>
                                </Link>
                              )}
                              {live && (
                                <a
                                  to={live}
                                  className="btn btn-sm text-dark"
                                  itemProp="url"
                                >
                                  <span itemProp="headline">Live</span>
                                </a>
                              )}
                              {githubRepo && (
                                <a
                                  to={githubRepo}
                                  className="btn btn-sm text-dark"
                                  itemProp="url"
                                >
                                  <span itemProp="headline">Github</span>
                                </a>
                              )}
                            </div>
                          </MDBCard>
                        </MDBCol>
                        <MDBCol md="4" className="mt-4 mt-md-0">
                          <div className="mb-3 d-flex flex-wrap">
                            {react && (
                              <MDBBadge
                                color="light"
                                className="mb-3 mr-3"
                                style={{ boxShadow: "none" }}
                              >
                                <MDBIcon
                                  style={{ fontSize: "1.3rem" }}
                                  size="lg"
                                  icon="hashtag"
                                />
                                <span style={{ fontSize: "1.3rem" }}>
                                  {" "}
                                  react
                                </span>
                              </MDBBadge>
                            )}
                            {gatsby && (
                              <MDBBadge
                                color="light"
                                className="mb-3 mr-3"
                                style={{ boxShadow: "none" }}
                              >
                                <MDBIcon
                                  style={{ fontSize: "1.3rem" }}
                                  size="lg"
                                  icon="hashtag"
                                />
                                <span style={{ fontSize: "1.3rem" }}>
                                  {" "}
                                  gatsby
                                </span>
                              </MDBBadge>
                            )}
                            {bootstrap && (
                              <MDBBadge
                                color="light"
                                className="mb-3 mr-3"
                                style={{ boxShadow: "none" }}
                              >
                                <MDBIcon
                                  style={{ fontSize: "1.3rem" }}
                                  size="lg"
                                  icon="hashtag"
                                />
                                <span style={{ fontSize: "1.3rem" }}>
                                  {" "}
                                  bootstrap
                                </span>
                              </MDBBadge>
                            )}
                            {mdbootstrap && (
                              <MDBBadge
                                color="light"
                                className="mb-3 mr-3"
                                style={{ boxShadow: "none" }}
                              >
                                <MDBIcon
                                  style={{ fontSize: "1.3rem" }}
                                  size="lg"
                                  icon="hashtag"
                                />
                                <span style={{ fontSize: "1.3rem" }}>
                                  {" "}
                                  mdbootstrap
                                </span>
                              </MDBBadge>
                            )}
                            {netlify && (
                              <MDBBadge
                                color="light"
                                className="mb-3 mr-3"
                                style={{ boxShadow: "none" }}
                              >
                                <MDBIcon
                                  style={{ fontSize: "1.3rem" }}
                                  size="lg"
                                  icon="hashtag"
                                />
                                <span style={{ fontSize: "1.3rem" }}>
                                  {" "}
                                  netlifyCMS
                                </span>
                              </MDBBadge>
                            )}
                            {netlifyCms && (
                              <MDBBadge
                                color="light"
                                className="mb-3 mr-3"
                                style={{ boxShadow: "none" }}
                              >
                                <MDBIcon
                                  style={{ fontSize: "1.3rem" }}
                                  size="lg"
                                  icon="hashtag"
                                />
                                <span style={{ fontSize: "1.3rem" }}>
                                  {" "}
                                  netlifyCMS
                                </span>
                              </MDBBadge>
                            )}
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </li>
                  )
                })}
              </ol>
            </MDBContainer>
          </>
        )}
      </LanguageContext.Consumer>
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
          description
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
    placeholderImage: file(relativePath: { eq: "pk.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
