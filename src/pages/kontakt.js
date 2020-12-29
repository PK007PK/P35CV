import React from "react"
import { MDBBtn } from "mdbreact"
import { LanguageContext } from "../components/layout"
import Form from "../components/Form"
import Layout from "../components/layout"
import JumbotronReus from "../components/JumbotronReus"

const KontaktPage = ({ data }) => {
  const jumbotronImg = data.placeholderImage.childImageSharp.fluid

  const textForJumbo = () => (
    <p className="text-right my-4">
      Dziękuję, że odwiedziłaś / odwiedziłeś moją stronę.
      <br /> Zapraszam Cię do zapoznania się z moim CV, oraz projektami które
      wykonałem.<br></br>Mam nadzieję, że uda nam się nawiązać korzystną
      współpracę
    </p>
  )

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

  return (
    <Layout
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      {" "}
      <LanguageContext.Consumer>
        {({ pl }) => (
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
