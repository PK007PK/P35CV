import React, { useContext } from "react"
import PropTypes from "prop-types"
import { graphql } from 'gatsby'
import { Link } from "gatsby"

import AppContext from '../AppProvider';

import Layout from "../components/Layout"
import Jumbo from "../components/Jumbo"
import SEO from "../components/seo"
import CardSimple from "../components/CardSimple"

import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBJumbotron } from "mdbreact"

import {
  indexPageTexts,
  TextForJumbo,
  TextForJumboPrint,
  ButtonsForJumbo,
  ButtonForJumboPrint,
} from "../data/indexPageContent"

const IndexPage = ({ data, location }) => {
  const { pl, print } = useContext(AppContext);
  
  const jumbotronImg = data.placeholderImage.childImageSharp.fluid
  const jumbotronImgPrint = data.placeholderImage2.childImageSharp.fluid

  return (
    <Layout
      pathname={location?.pathname}
    >
      
      <SEO title={pl ? "Strona Główna" : "Home"} />
      <Jumbo
        title={"Piotr Krasny"}
        subtitle={pl ? indexPageTexts.title[0] : indexPageTexts.title[1]}
        text={print ? TextForJumboPrint : TextForJumbo}
        bottomBar={print ? ButtonForJumboPrint : ButtonsForJumbo}
        style={
          print
            ? {
                boxShadow: "none",
                minHeight: "550px",
                backgroundColor: "white",
              }
            : {
                backgroundColor: "#f5f5f5",
                boxShadow: "none",
                minHeight: "550px",
              }
        }
        imgSource={print ? jumbotronImgPrint : jumbotronImg}
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
            <h2 className="h3">
              {pl
                ? indexPageTexts.subtitle[0]
                : indexPageTexts.subtitle[1]}
            </h2>

            <p className="lead">
              {pl ? indexPageTexts.lead1[0] : indexPageTexts.lead1[1]}
              <br />{" "}
              {pl ? indexPageTexts.lead2[0] : indexPageTexts.lead2[1]}
              <br />{" "}
              {pl ? indexPageTexts.lead3[0] : indexPageTexts.lead3[1]}
            </p>

            <p>
              {pl
                ? indexPageTexts.description2[0]
                : indexPageTexts.description2[1]}
            </p>
          </MDBCol>
          <MDBCol md="4" className="">
            <CardSimple text>
              {" "}
              {pl ? indexPageTexts.advert1[0] : indexPageTexts.advert1[1]}
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
            </CardSimple>
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
              <li className="mb-3">
                <strong className="h5">
                  {pl
                    ? indexPageTexts.point1[0]
                    : indexPageTexts.point1[1]}
                </strong>
                <br></br>
                {pl ? indexPageTexts.text1[0] : indexPageTexts.text1[1]}
              </li>

              <li className="mb-3">
                <strong className="h5">
                  {pl
                    ? indexPageTexts.point2[0]
                    : indexPageTexts.point2[1]}
                </strong>
                <br></br>
                {pl ? indexPageTexts.text2[0] : indexPageTexts.text2[1]}
              </li>

              <li className="mb-3">
                <strong className="h5">
                  {pl
                    ? indexPageTexts.point3[0]
                    : indexPageTexts.point3[1]}
                </strong>
                <br></br>
                {pl ? indexPageTexts.text3[0] : indexPageTexts.text3[1]}
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4" className="">
            <CardSimple text>
              {pl ? indexPageTexts.advert2[0] : indexPageTexts.advert2[1]}
            </CardSimple>
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
              <li className="mb-3">
                <strong className="h5">
                  {pl
                    ? indexPageTexts.point4[0]
                    : indexPageTexts.point4[1]}
                </strong>
                <br></br>
                {pl ? indexPageTexts.text4[0] : indexPageTexts.text4[1]}
              </li>

              <li className="mb-3">
                <strong className="h5">
                  {pl
                    ? indexPageTexts.point5[0]
                    : indexPageTexts.point5[1]}
                </strong>
                <br></br>
                {pl ? indexPageTexts.text5[0] : indexPageTexts.text5[1]}
              </li>

              <li className="mb-3">
                <strong className="h5">
                  {pl
                    ? indexPageTexts.point6[0]
                    : indexPageTexts.point6[1]}
                </strong>
                <br></br>
                {pl ? indexPageTexts.text6[0] : indexPageTexts.text6[1]}
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4" className="my-3 mt-md-0">
            <CardSimple text>
              {pl ? indexPageTexts.advert3[0] : indexPageTexts.advert3[1]}
            </CardSimple>
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
              <li className="mb-3">
                <strong className="h5">
                  {pl
                    ? indexPageTexts.subtitleSkillsSubtitle1[0]
                    : indexPageTexts.subtitleSkillsSubtitle1[1]}
                </strong>
                <br></br>
                {pl ? indexPageTexts.skill1[0] : indexPageTexts.skill1[1]}
                <br />
                {pl ? indexPageTexts.skill2[0] : indexPageTexts.skill2[1]}
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
            </ul>
          </MDBCol>
          <MDBCol md="4" className="my-3 mt-md-0">
            <CardSimple icons>
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
                <MDBIcon fab size="3x" icon="js" className="amber-text" />
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
            </CardSimple>
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
            <h2 className="h3">
              {pl
                ? indexPageTexts.subtitle2[0]
                : indexPageTexts.subtitle2[1]}
            </h2>

            <ul className="list-unstyled">
              <li className="mb-3">
                <strong className="h5">
                  {pl
                    ? indexPageTexts.point7[0]
                    : indexPageTexts.point7[1]}
                </strong>
                <br></br>{" "}
                {pl ? indexPageTexts.text7[0] : indexPageTexts.text7[1]}
                <br />{" "}
                {pl ? indexPageTexts.text7a[0] : indexPageTexts.text7a[1]}
              </li>

              <li className="mb-3">
                <strong className="h5">
                  {pl
                    ? indexPageTexts.point8[0]
                    : indexPageTexts.point8[1]}
                </strong>
                <br></br>{" "}
                {pl ? indexPageTexts.text8[0] : indexPageTexts.text8[1]}
                <br />{" "}
                {pl ? indexPageTexts.text8a[0] : indexPageTexts.text8a[1]}
              </li>

              <li className="mb-3">
                <strong className="h5">
                  {pl
                    ? indexPageTexts.point9[0]
                    : indexPageTexts.point9[1]}
                </strong>
                <br></br>{" "}
                {pl ? indexPageTexts.text9[0] : indexPageTexts.text9[1]}
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4" className="">
            <CardSimple icons>
              <div className="d-flex justify-content-around align-items-center">
                <i className="politechnika"></i>
                <i className="ekonomiczna"></i>
                <i className="lo"></i>
              </div>
            </CardSimple>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div
          style={
            print
              ? {
                  boxShadow: "none",
                  backgroundColor: "white",
                }
              : {
                  boxShadow: "none",
                  backgroundColor: "#f5f5f5",
                }
          }
          className="mt-5"
        >
          {print && (
            <MDBContainer>
              <MDBJumbotron
                className="mb-0"
                style={{
                  backgroundColor: "white",
                }}
              >
                <p>
                  {pl ? indexPageTexts.rodo[0] : indexPageTexts.rodo[1]}
                </p>
              </MDBJumbotron>
            </MDBContainer>
          )}
        </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
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
