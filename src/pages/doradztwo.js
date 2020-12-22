import React from "react"
import { Link } from "gatsby"

// import SEO from "../components/seo"
import Layout from "../components/layout"
import SubpageHeading from "../components/subpageHeading"
import ImageReusable from "../components/ImageReusable"
import { HorizontalBar } from "react-chartjs-2"

import {
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBBadge,
  MDBCard,
  MDBCardBody,
  MDBProgress,
} from "mdbreact"

import allProjects from "../data/data"

class IndexPage extends React.Component {
  interveal = ""
  state = {
    projects: [],
    amount: 0,
    values: 0,
    grants: 0,
    isLoaded: false,
  }

  initializeData = () =>
    this.setState(prevState => ({
      isLoaded: !prevState.isLoaded,
    }))

  addValue = () => {
    const n = this.state.amount
    const newItem = allProjects[n]
    if (this.state.amount < allProjects.length) {
      this.setState(prevState => ({
        projects: prevState.projects.concat(newItem),
        amount: prevState.amount + 1,
        values: prevState.values + parseInt(newItem.wartosc.replace(/\s/g, "")),
        grants: prevState.grants + parseInt(newItem.dotacja.replace(/\s/g, "")),
      }))
    }
  }

  componentDidMount() {
    this.initializeData()
    setInterval(this.addValue, 5)
  }

  componentDidUpdate() {}

  Project = () =>
    this.state.projects.map(project => (
      <Project
        name={project.podmiot}
        title={project.projekt}
        value={project.wartosc}
        grant={project.dotacja}
      />
    ))

  render() {
    console.log(this.state.projects)
    const text = () => (
      <div className="text-center">
        W latach 2004 - 2020 prowadziłem firmę zajmującą się pozyskiwaniem
        dotacji
        <br /> na finansowanie projektów inwestycyjnych.
        <br /> Poniżej niektóre wykonane przez nas projekty
      </div>
    )
    const signBlock = () => (
      <div className="d-flex justify-content-around">
        <div className="card w-25 stylish-color">
          <div className="card-body">
            <p className="card-text text-center text-white">
              Fundusze Strukturalne
              <br />
              2004-2006 2007-2013 2014-2020
            </p>
          </div>
        </div>
        <div className="card w-25 warning-color-dark">
          <div className="card-body">
            <p className="card-text text-center text-white">
              NFOŚ / WFOŚ
              <br />
              Programy Krajowe
            </p>
          </div>
        </div>
        <div className="card w-25 danger-color-dark">
          <div className="card-body">
            <p className="card-text text-center text-white">
              Fundusze Norweskie
              <br />
              Program Szwajcarski
            </p>
          </div>
        </div>
      </div>
    )
    return (
      <Layout>
        {/* <SEO title="Doradztwo" /> */}
        <SubpageHeading
          title="Piotr Krasny"
          subtitle="Doradztwo i finanse"
          textBlock={text}
          graphicBlock={signBlock}
        />

        <MDBContainer style={{ minHeight: "100vh" }}>
          <MDBRow className="my-5">
            <MDBCol>
              <div className="d-flex align-items-start">
                <h2 className="text-center">
                  Portfolio / zrealizowane projekty{" "}
                </h2>
                <span class="badge rounded-pill badge-notification bg-danger">
                  {this.state.amount}
                </span>
              </div>
              <MDBProgress
                value={(this.state.amount / 180) * 100}
                className="my-2"
              />
              <div className="d-flex justify-content-between">
                <p>
                  Wartość projektów: {this.state.values.toLocaleString()} zł
                </p>
                <p>
                  Pozyskane dotacje: {this.state.grants.toLocaleString()} zł
                </p>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="d-flex flex-column-reverse flex-wrap justify-content-between">
              {this.state.isLoaded && <this.Project />}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    )
  }
}

const Project = ({ name, title, value, grant }) => {
  return (
    // <div style={{ flexBasis: "250px", flexGrow: 1 }} className="card m-2">
    <div style={{}} className="card m-2">
      <div className="card-body d-flex flex-column justify-content-between">
        {/* <p className="card-text text-center text-white font-weight-lighter">
          {name}
        </p> */}
        <p className="card-text ">{title}</p>
        <div className="">
          <hr />
          <div className="d-flex justify-content-between">
            <span style={{ fontSize: "12px" }}>Wartość: {value} zł</span>
            <span style={{ fontSize: "12px" }}>Dotacja: {grant} zł</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
