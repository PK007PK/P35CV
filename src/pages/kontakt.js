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

  const buttonsForJumbo = () => (
    <div className="pt-2 text-right">
      <MDBBtn
        href="https://github.com/PK007PK"
        target="_blank"
        color="indigo"
        rel="noopener noreferrer"
        className="waves-effect ml-4"
      >
        CV PDF
        <MDBIcon fas icon="file-pdf" className="ml-2" />
      </MDBBtn>
      <MDBBtn
        href="https://github.com/PK007PK"
        target="_blank"
        color="pink"
        rel="noopener noreferrer"
        className="waves-effect"
      >
        LinkedIn <MDBIcon fab icon="linkedin-in" className="ml-2" />
      </MDBBtn>
      <MDBBtn
        href="https://github.com/PK007PK"
        target="_blank"
        color="amber"
        rel="noopener noreferrer"
        className="waves-effect mr-0"
      >
        Github <MDBIcon fab icon="github" className="ml-2" />
      </MDBBtn>
    </div>
  )

  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <JumbotronReus
        title={"Piotr Krasny"}
        subtitle={"Kontakt"}
        text={textForJumbo}
        bottomBar={buttonsForJumbo}
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
