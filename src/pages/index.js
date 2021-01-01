import React from "react"
import { indexPageTexts } from "../data/indexPageTexts"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBIcon,
  MDBAnimation,
} from "mdbreact"

import { LanguageContext } from "../components/layout"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron2 from "../components/jumbotron2"
import JumbotronReus from "../components/JumbotronReus"

const IndexPage = ({ data, location }) => {
  const jumbotronImg = data.placeholderImage.childImageSharp.fluid

  const textForJumbo = () => (
    <LanguageContext.Consumer>
      {({ pl }) => (
        <p className="text-right">
          {pl ? indexPageTexts.description[0] : indexPageTexts.description[1]}
        </p>
      )}
    </LanguageContext.Consumer>
  )

  const buttonsForJumbo = () => (
    <div className="text-md-right homepage-btn-bar">
      <MDBBtn
        href="https://github.com/PK007PK"
        target="_blank"
        color="indigo"
        rel="noopener noreferrer"
        className="waves-effect w-100 mx-0 mx-md-2"
      >
        CV PDF
        <MDBIcon fas icon="file-pdf" className="ml-2" />
      </MDBBtn>
      <MDBBtn
        href="https://github.com/PK007PK"
        target="_blank"
        color="pink"
        rel="noopener noreferrer"
        className="waves-effect w-100 mx-0 mx-md-2"
      >
        LinkedIn <MDBIcon fab icon="linkedin-in" className="ml-2" />
      </MDBBtn>
      <MDBBtn
        href="https://github.com/PK007PK"
        target="_blank"
        color="amber"
        rel="noopener noreferrer"
        className="waves-effect w-100 mx-0 ml-md-2"
      >
        Github <MDBIcon fab icon="github" className="ml-2" />
      </MDBBtn>
    </div>
  )

  return (
    <Layout lang={location && location.state && location.state.lang}>
      <LanguageContext.Consumer>
        {({ pl }) => (
          <>
            <SEO title={pl ? "Strona Główna" : "Home"} />
            <JumbotronReus
              title={"Piotr Krasny"}
              subtitle={pl ? indexPageTexts.title[0] : indexPageTexts.title[1]}
              text={textForJumbo}
              bottomBar={buttonsForJumbo}
              // rightBox={}
              style={{
                backgroundColor: "#f5f5f5",
                boxShadow: "none",
                minHeight: "550px",
              }}
              imgSource={jumbotronImg}
            />

            <MDBContainer className="mt-5">
              <MDBRow className="justify-content-between">
                <MDBCol md="7" className="text-right">
                  <MDBAnimation reveal type="slideInUp">
                    <h2 className="h3">
                      {pl
                        ? indexPageTexts.subtitle[0]
                        : indexPageTexts.subtitle[1]}
                    </h2>
                  </MDBAnimation>
                  <MDBAnimation reveal type="slideInUp">
                    <p className="lead">
                      {pl ? indexPageTexts.lead1[0] : indexPageTexts.lead1[1]}
                      <br />{" "}
                      {pl ? indexPageTexts.lead2[0] : indexPageTexts.lead2[1]}
                      <br />{" "}
                      {pl ? indexPageTexts.lead3[0] : indexPageTexts.lead3[1]}
                    </p>
                  </MDBAnimation>
                  <MDBAnimation reveal type="slideInUp">
                    <p>
                      {pl
                        ? indexPageTexts.description2[0]
                        : indexPageTexts.description2[1]}
                    </p>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md="4" className="">
                  <MDBAnimation reveal type="slideInUp">
                    <MDBCard className="my-3 mt-md-0">
                      <MDBCardBody>
                        <p className="h2 text-center font-weight-lighter mb-0">
                          {pl
                            ? indexPageTexts.advert1[0]
                            : indexPageTexts.advert1[1]}
                        </p>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>

              <MDBRow className="mt-5 justify-content-between">
                <MDBCol md="7" className="text-right">
                  <ul className="list-unstyled">
                    <MDBAnimation reveal type="slideInUp">
                      <li className="mb-3">
                        <strong className="h5">
                          {pl
                            ? indexPageTexts.point1[0]
                            : indexPageTexts.point1[1]}
                        </strong>
                        <br></br>
                        {pl ? indexPageTexts.text1[0] : indexPageTexts.text1[1]}
                      </li>
                    </MDBAnimation>
                    <MDBAnimation reveal type="slideInUp">
                      <li className="mb-3">
                        <strong className="h5">
                          {pl
                            ? indexPageTexts.point2[0]
                            : indexPageTexts.point2[1]}
                        </strong>
                        <br></br>
                        {pl ? indexPageTexts.text2[0] : indexPageTexts.text2[1]}
                      </li>
                    </MDBAnimation>
                    <MDBAnimation reveal type="slideInUp">
                      <li className="mb-3">
                        <strong className="h5">
                          {pl
                            ? indexPageTexts.point3[0]
                            : indexPageTexts.point3[1]}
                        </strong>
                        <br></br>
                        {pl ? indexPageTexts.text3[0] : indexPageTexts.text3[1]}
                      </li>
                    </MDBAnimation>
                  </ul>
                </MDBCol>
                <MDBCol md="4" className="">
                  <MDBAnimation reveal type="slideInUp">
                    <MDBCard className="my-3 mt-md-0">
                      <MDBCardBody>
                        <p className="h4 text-center font-weight-lighter mb-0">
                          {pl
                            ? indexPageTexts.advert2[0]
                            : indexPageTexts.advert2[1]}
                        </p>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>

              <MDBRow className="mt-5 justify-content-between">
                <MDBCol md="7" className="text-right">
                  <ul className="list-unstyled">
                    <MDBAnimation reveal type="slideInUp">
                      <li className="mb-3">
                        <strong className="h5">
                          {pl
                            ? indexPageTexts.point4[0]
                            : indexPageTexts.point4[1]}
                        </strong>
                        <br></br>
                        {pl ? indexPageTexts.text4[0] : indexPageTexts.text4[1]}
                      </li>
                    </MDBAnimation>
                    <MDBAnimation reveal type="slideInUp">
                      <li className="mb-3">
                        <strong className="h5">
                          {pl
                            ? indexPageTexts.point5[0]
                            : indexPageTexts.point5[1]}
                        </strong>
                        <br></br>
                        {pl ? indexPageTexts.text5[0] : indexPageTexts.text5[1]}
                      </li>
                    </MDBAnimation>
                    <MDBAnimation reveal type="slideInUp">
                      <li className="mb-3">
                        <strong className="h5">
                          {pl
                            ? indexPageTexts.point6[0]
                            : indexPageTexts.point6[1]}
                        </strong>
                        <br></br>
                        {pl ? indexPageTexts.text6[0] : indexPageTexts.text6[1]}
                      </li>
                    </MDBAnimation>
                  </ul>
                </MDBCol>
                <MDBCol md="4" className="my-3 mt-md-0">
                  <MDBAnimation reveal type="slideInUp">
                    <MDBCard className="">
                      <MDBCardBody>
                        <p className="h4 text-center font-weight-lighter mb-0 ">
                          {pl
                            ? indexPageTexts.advert3[0]
                            : indexPageTexts.advert3[1]}
                        </p>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>

              <MDBRow className="text-right mt-5 justify-content-between">
                <MDBCol md="7" className="text-righ">
                  <MDBAnimation reveal type="slideInUp">
                    <h2 className="h3">
                      {pl
                        ? indexPageTexts.subtitle2[0]
                        : indexPageTexts.subtitle2[1]}
                    </h2>
                  </MDBAnimation>
                  <ul className="list-unstyled">
                    <MDBAnimation reveal type="slideInUp">
                      <li className="mb-3">
                        <strong className="h5">
                          {pl
                            ? indexPageTexts.point7[0]
                            : indexPageTexts.point7[1]}
                        </strong>
                        <br></br>{" "}
                        {pl ? indexPageTexts.text7[0] : indexPageTexts.text7[1]}
                        <br />{" "}
                        {pl
                          ? indexPageTexts.text7a[0]
                          : indexPageTexts.text7a[1]}
                      </li>
                    </MDBAnimation>
                    <MDBAnimation reveal type="slideInUp">
                      <li className="mb-3">
                        <strong className="h5">
                          {pl
                            ? indexPageTexts.point8[0]
                            : indexPageTexts.point8[1]}
                        </strong>
                        <br></br>{" "}
                        {pl ? indexPageTexts.text8[0] : indexPageTexts.text8[1]}
                        <br />{" "}
                        {pl
                          ? indexPageTexts.text8a[0]
                          : indexPageTexts.text8a[1]}
                      </li>
                    </MDBAnimation>
                    <MDBAnimation reveal type="slideInUp">
                      <li className="mb-3">
                        <strong className="h5">
                          {pl
                            ? indexPageTexts.point9[0]
                            : indexPageTexts.point9[1]}
                        </strong>
                        <br></br>{" "}
                        {pl ? indexPageTexts.text9[0] : indexPageTexts.text9[1]}
                      </li>
                    </MDBAnimation>
                  </ul>
                </MDBCol>
                <MDBCol md="4" className="">
                  <MDBAnimation reveal type="slideInUp">
                    <MDBCard className="my-3 mt-md-0">
                      <MDBCardBody className="">
                        <div className="d-flex justify-content-around align-items-center">
                          <i className="politechnika"></i>
                          <i className="ekonomiczna"></i>
                          <i className="lo"></i>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <div
              style={{
                backgroundColor: "#f5f5f5",
                boxShadow: "none",
              }}
              className="mt-5"
            >
              {/* <MDBContainer>
                <Jumbotron2 className="mt-5"></Jumbotron2>
              </MDBContainer> */}
            </div>
          </>
        )}
      </LanguageContext.Consumer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "formal.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
