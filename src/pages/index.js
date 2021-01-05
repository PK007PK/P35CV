import React from "react"
import { Link } from "gatsby"

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
  MDBJumbotron,
} from "mdbreact"

import { LanguageContext } from "../components/layout"
import Layout from "../components/layout"
import SEO from "../components/seo"

import JumbotronReus from "../components/JumbotronReus"

const IndexPage = ({ data, location }) => {
  const jumbotronImg = data.placeholderImage.childImageSharp.fluid
  const jumbotronImg2 = data.placeholderImage2.childImageSharp.fluid

  const textForJumbo = () => (
    <LanguageContext.Consumer>
      {({ pl }) => (
        <p className="">
          {pl ? indexPageTexts.description[0] : indexPageTexts.description[1]}
        </p>
      )}
    </LanguageContext.Consumer>
  )

  const textForCV = () => (
    <LanguageContext.Consumer>
      {({ pl }) => (
        <p className="lead">
          {pl ? (
            <>
              16 lat doświadczenia w branży doradczej
              <br />
              Kompetencje w obszarze organizacji, zarządzania i finansów
            </>
          ) : (
            <>
              16 years of experience in the consulting industry
              <br />
              Competence in organisational, management and financial matters
            </>
          )}
        </p>
      )}
    </LanguageContext.Consumer>
  )

  const buttonsForJumbo = () => (
    <div className=" homepage-btn-bar">
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

  const buttonForCV = () => (
    <div className="">
      <p className="lead mb-1 " style={{ fontSize: "25px" }}>
        krasny.netlify.app
      </p>
      <p className="lead mb-1" style={{ fontSize: "18px" }}>
        krasny.piotr@gmail.com
      </p>
      <p className="lead mb-1" style={{ fontSize: "18px" }}>
        tel.: 509 527 925
      </p>
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
        {({ pl, print }) => (
          <>
            <SEO title={pl ? "Strona Główna" : "Home"} />
            <JumbotronReus
              title={"Piotr Krasny"}
              subtitle={pl ? indexPageTexts.title[0] : indexPageTexts.title[1]}
              text={print ? textForCV : textForJumbo}
              bottomBar={print ? buttonForCV : buttonsForJumbo}
              // rightBox={}
              style={{
                backgroundColor: "#f5f5f5",
                boxShadow: "none",
                minHeight: "550px",
              }}
              imgSource={print ? jumbotronImg2 : jumbotronImg}
            />

            <MDBContainer className="mt-5">
              <MDBRow
                className={
                  print
                    ? "justify-content-between flex-row-reverse text-left mt-5"
                    : "justify-content-between text-right mt-5"
                }
              >
                <MDBCol md="7" className="">
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
                        <p className="h2 card-title text-center font-weight-lighter mb-0">
                          {pl
                            ? indexPageTexts.advert1[0]
                            : indexPageTexts.advert1[1]}
                        </p>
                        {print && (
                          <Link to="/consulting">
                            <p className="card-text text-center mt-4">
                              <strong style={{ color: "#CC0000" }}>
                                Portfolio:
                              </strong>{" "}
                              krasny.netlify.app/consulting
                            </p>
                          </Link>
                        )}
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>

              <MDBRow
                className={
                  print
                    ? "justify-content-between flex-row-reverse text-left mt-5"
                    : "justify-content-between text-right mt-5"
                }
              >
                <MDBCol md="7" className="">
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

              <MDBRow
                className={
                  print
                    ? "justify-content-between flex-row-reverse text-left mt-5"
                    : "justify-content-between text-right mt-5"
                }
              >
                <MDBCol md="7" className="">
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

              <MDBRow
                className={
                  print
                    ? "justify-content-between flex-row-reverse text-left mt-5"
                    : "justify-content-between text-right mt-5"
                }
              >
                <MDBCol md="7" className="">
                  <h2 className="h3">
                    {pl
                      ? indexPageTexts.subtitleSkills[0]
                      : indexPageTexts.subtitleSkills[1]}
                  </h2>
                  <ul className="list-unstyled">
                    <MDBAnimation reveal type="slideInUp">
                      <li className="mb-3">
                        <strong className="h5">
                          {pl
                            ? indexPageTexts.subtitleSkillsSubtitle1[0]
                            : indexPageTexts.subtitleSkillsSubtitle1[1]}
                        </strong>
                        <br></br>
                        {pl
                          ? indexPageTexts.skill1[0]
                          : indexPageTexts.skill1[1]}
                        <br />
                        {pl
                          ? indexPageTexts.skill2[0]
                          : indexPageTexts.skill2[1]}
                      </li>
                      <li className="mb-3">
                        <strong className="h5">
                          {pl
                            ? indexPageTexts.subtitleSkillsSubtitle2[0]
                            : indexPageTexts.subtitleSkillsSubtitle2[1]}
                        </strong>
                        <br></br>

                        {pl ? indexPageTexts.it1[0] : indexPageTexts.it1[1]}
                        <br />
                        <br />
                        {pl ? indexPageTexts.it2[0] : indexPageTexts.it2[1]}
                      </li>
                    </MDBAnimation>
                  </ul>
                </MDBCol>
                <MDBCol md="4" className="my-3 mt-md-0">
                  <MDBAnimation reveal type="slideInUp">
                    <MDBCard>
                      <MDBCardBody>
                        <div className="d-flex justify-content-around">
                          <MDBIcon
                            color="red"
                            fab
                            size="3x"
                            icon="html5"
                            className="red-text"
                          />
                          <MDBIcon
                            fab
                            size="3x"
                            icon="css3-alt"
                            className="blue-text"
                          />
                          <MDBIcon
                            fab
                            size="3x"
                            icon="sass"
                            className="pink-text"
                          />
                          <MDBIcon
                            fab
                            size="3x"
                            icon="js"
                            className="amber-text"
                          />
                          <MDBIcon
                            fab
                            size="3x"
                            icon="react"
                            className="blue-text"
                          />
                        </div>
                        {print && (
                          <Link to={"/programming"}>
                            <p className="card-text text-center mt-5">
                              <strong style={{ color: "#CC0000" }}>
                                Portfolio:
                              </strong>{" "}
                              krasny.netlify.app/programming
                            </p>
                          </Link>
                        )}
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>

              <MDBRow
                className={
                  print
                    ? "justify-content-between flex-row-reverse text-left mt-5"
                    : "justify-content-between text-right mt-5"
                }
              >
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
              {print && (
                <MDBContainer>
                  <MDBJumbotron
                    className="mb-0"
                    style={{
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <p>
                      {pl ? indexPageTexts.rodo[0] : indexPageTexts.rodo[1]}
                    </p>
                  </MDBJumbotron>
                </MDBContainer>
              )}
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
    placeholderImage2: file(relativePath: { eq: "formal2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
