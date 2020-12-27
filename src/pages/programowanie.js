import React from "react"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"

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
  MDBBtn,
} from "mdbreact"
import JumbotronReus from "../components/JumbotronReus"

const Programowanie = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const jumbotronImg = data.placeholderImage.childImageSharp.fluid
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />

        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  const textForJumbo = () => (
    <p className="text-right my-4">
      Co oznacza skrót JAM Stack? Javascript-APIs-Markup. Jest połączeniem
      dobrze znanych narzędzi i wydzieleniem FrontEndowej architektury aplikacji
      od jej backendu. Nie ma konkurentów pod kątem szybkości działania,
      bezpieczeństwa i skalowalności.
    </p>
  )

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
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <JumbotronReus
        title={"Piotr Krasny"}
        subtitle={"Programowanie"}
        text={textForJumbo}
        bottomBar={iconBar}
        // rightBox={reactIcon}
        style={{
          backgroundColor: "#f5f5f5",
          boxShadow: "none",
          minHeight: "520px",
        }}
        imgSource={jumbotronImg}
      />
      <MDBContainer>
        <ol style={{ listStyle: `none` }}>
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
            } = post.frontmatter
            return (
              <li key={post.fields.slug}>
                <MDBRow className="justify-content-between mb-5">
                  <MDBCol md="7">
                    <MDBCard
                      className="post-list-item mb-0"
                      // itemScope
                      // itemType="http://schema.org/Article"
                    >
                      <Image className="card-img" fluid={fluid} />
                      {/* <MDBCardBody>
                        <header>
                          <h2>
                            <Link to={post.fields.slug} itemProp="url">
                              <span itemProp="headline">{title}</span>
                            </Link>
                          </h2>
                          <small>{post.frontmatter.date}</small>
                        </header>
                        <section>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                post.frontmatter.description || post.excerpt,
                            }}
                            itemProp="description"
                          />
                        </section>
                      </MDBCardBody> */}
                      <div class="card-footer d-flex justify-content-between">
                        {/* react, gatsby, bootstrap, mdbootstrap, netlify,
                        netlifyCms, */}
                        {react && <small class="text-muted">#react</small>}
                        {gatsby && <small class="text-muted">#gatsby</small>}
                        {bootstrap && (
                          <small class="text-muted">#bootstrap</small>
                        )}
                        {mdbootstrap && (
                          <small class="text-muted">#mdbootstrap</small>
                        )}
                        {netlify && <small class="text-muted">#netlify</small>}
                        {netlifyCms && (
                          <small class="text-muted">#netlifyCMS</small>
                        )}
                      </div>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard className="" style={{ minHeight: "100%" }}>
                      <MDBCardBody>
                        <MDBCardTitle>{title}</MDBCardTitle>
                        <MDBCardText className="">
                          {description}
                        </MDBCardText>{" "}
                      </MDBCardBody>
                      <div className="card-footer d-flex justify-content-between">
                        {post.fields.slug && (
                          <Link
                            to={post.fields.slug}
                            className="btn btn-sm"
                            itemProp="url"
                          >
                            <span itemProp="headline">Więcej</span>
                          </Link>
                        )}
                        <MDBBtn href="#" className="btn-sm">
                          Live
                        </MDBBtn>
                        <MDBBtn href="#" className="btn-sm">
                          Github
                        </MDBBtn>
                      </div>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </li>
            )
          })}
        </ol>
      </MDBContainer>
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
          date(formatString: "MMMM DD, YYYY")
          title
          description
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
