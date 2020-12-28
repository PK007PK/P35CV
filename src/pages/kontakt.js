import React from "react"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBIcon,
} from "mdbreact"

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
    <div className="text-right">
      <MDBBtn
        href="tel:509527925"
        target="_blank"
        // color="pink"
        rel="noopener noreferrer"
        className="waves-effect"
      >
        509 527 925
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
  )

  return (
    <Layout
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* <SEO title="Home" /> */}
      <JumbotronReus
        title={"Piotr Krasny"}
        subtitle={"Kontakt"}
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
