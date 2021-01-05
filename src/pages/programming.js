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
  MDBBtn,
} from "mdbreact"
import JumbotronReus from "../components/JumbotronReus"

const Programowanie = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
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

  // var allClasses = []

  // var allElements = document.querySelectorAll("*")

  // for (var i = 0; i < allElements.length; i++) {
  //   var classes = allElements[i].className.toString().split(/\s+/)
  //   for (var j = 0; j < classes.length; j++) {
  //     var cls = classes[j]
  //     if (cls && allClasses.indexOf(cls) === -1) allClasses.push(cls)
  //   }
  // }

  // console.log(allClasses)

  return (
    <Layout lang={location && location.state && location.state.lang}>
      <LanguageContext.Consumer>
        {({ pl }) => (
          <>
            <SEO title={pl ? "Programowanie" : "Programming"} />
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
                  const fluid =
                    post.frontmatter.thumbnail &&
                    post.frontmatter.thumbnail.childImageSharp.fluid
                  const {
                    title,
                    titleEng,
                    description,
                    descriptionEng,
                    showMore,
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
                              <MDBCardTitle>
                                {pl ? title : titleEng}
                              </MDBCardTitle>
                              <MDBCardText className="">
                                <small className="text-muted">{date}</small>
                              </MDBCardText>
                              <MDBCardText className="">
                                {pl ? description : descriptionEng}
                              </MDBCardText>
                            </MDBCardBody>
                            <div className="card-footer">
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
                          <div className="mb-3 d-flex flex-wrap">
                            {react && (
                              <MDBBadge
                                color="light"
                                className="mb-3 mr-3"
                                style={{ boxShadow: "none" }}
                              >
                                <MDBIcon
                                  style={{ fontSize: "1.1rem" }}
                                  size="lg"
                                  icon="hashtag"
                                />
                                <span style={{ fontSize: "1.1rem" }}>
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
                                  style={{ fontSize: "1.1rem" }}
                                  size="lg"
                                  icon="hashtag"
                                />
                                <span style={{ fontSize: "1.1rem" }}>
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
                                  style={{ fontSize: "1.1rem" }}
                                  size="lg"
                                  icon="hashtag"
                                />
                                <span style={{ fontSize: "1.1rem" }}>
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
                                  style={{ fontSize: "1.1rem" }}
                                  size="lg"
                                  icon="hashtag"
                                />
                                <span style={{ fontSize: "1.1rem" }}>
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
                                  style={{ fontSize: "1.1rem" }}
                                  size="lg"
                                  icon="hashtag"
                                />
                                <span style={{ fontSize: "1.1rem" }}>
                                  netlify
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
                                  style={{ fontSize: "1.1rem" }}
                                  size="lg"
                                  icon="hashtag"
                                />
                                <span
                                  style={{
                                    fontSize: "1.1rem",
                                  }}
                                >
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
          titleEng
          description
          descriptionEng
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
