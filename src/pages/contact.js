import React from "react"
import { MDBBtn } from "mdbreact"
import { LanguageContext } from "../components/layout"
import Form from "../components/Form"
import Layout from "../components/layout"
import JumbotronReus from "../components/JumbotronReus"
import SEO from "../components/seo"
const KontaktPage = ({ data, location }) => {
  const contactInfo = () => (
    <LanguageContext.Consumer>
      {({ pl }) => (
        <div className="text-right">
          <MDBBtn
            href="tel:509527925"
            target="_blank"
            // color="pink"
            rel="noopener noreferrer"
            className="waves-effect"
          >
            {pl ? "Tel:" : "Phone:"} 509 527 925
          </MDBBtn>
          <MDBBtn
            href="mailto:krasny.piotr@gmail.com.com"
            target="_blank"
            color="blue"
            rel="noopener noreferrer"
            className="waves-effect mr-md-0"
          >
            krasny.piotr@gmail.com
          </MDBBtn>
        </div>
      )}
    </LanguageContext.Consumer>
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
    <Layout
      lang={location && location.state && location.state.lang}
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      {" "}
      <LanguageContext.Consumer>
        {({ pl }) => (
          <>
            <SEO title={pl ? "Kontakt" : "Contact"} />
            <JumbotronReus
              title={"Piotr Krasny"}
              subtitle={pl ? "Kontakt" : "Contact"}
              // text={textForJumbo}
              bottomBar={contactInfo}
              rightBox={Form}
              style={{
                backgroundColor: "#f5f5f5",
                boxShadow: "none",
                minHeight: "100%",
                marginBottom: 0,
              }}
              // imgSource={jumbotronImg}
            />
          </>
        )}
      </LanguageContext.Consumer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "pk.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default KontaktPage