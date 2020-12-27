import React from "react"
import { Link } from "gatsby"

// import SEO from "../components/seo"
import Layout from "../components/layout"
import SubpageHeading from "../components/subpageHeading"
import JumbotronReus from "../components/JumbotronReus"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBProgress,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact"

import GrantProjectCard from "../components/GrantProjectCard"
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

  componentDidMount() {
    this.initializeData()
    setInterval(this.addValue, 35)
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

  ShowAllProjects = () => (
    <div className="d-flex flex-column-reverse flex-wrap justify-content-between">
      {this.state.projects.map(project => (
        <GrantProjectCard
          name={project.podmiot}
          title={project.projekt}
          value={project.wartosc}
          grant={project.dotacja}
          style={{ marginBottom: "1.5rem" }}
        />
      ))}
    </div>
  )

  ShowCurrentProject = () => (
    <GrantProjectCard
      whiteText
      style={{ minHeight: "360px", backgroundColor: "#2BBBAD", color: "white" }}
      name={
        this.state.projects[0]
          ? this.state.projects[this.state.projects.length - 1].podmiot
          : "Ładowanie"
      }
      title={
        this.state.projects[0]
          ? this.state.projects[this.state.projects.length - 1].projekt
          : "Ładowanie"
      }
      value={
        this.state.projects[0]
          ? this.state.projects[this.state.projects.length - 1].wartosc
          : "Ładowanie"
      }
      grant={
        this.state.projects[0]
          ? this.state.projects[this.state.projects.length - 1].dotacja
          : "Ładowanie"
      }
    />
  )

  fundsList = [
    "Fundusze strukturalne 2004 - 2006",
    "Fundusze strukturalne 2007 - 2013",
    "Fundusze strukturalne 2014 - 2020",
    "NFOŚ / WFOŚ",
    'Fundusze EOG / "Norweskie"',
  ]

  ShowFundsList = () => {
    return this.fundsList.map(item => (
      <MDBCard
        className="mb-4"
        style={{
          backgroundColor: "#2E2E2E",
          color: "white",
        }}
      >
        <MDBCardBody>
          <MDBCardText className="text-center text-white">
            <MDBIcon far icon="bookmark" className="mr-2" />
            {item}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    ))
  }

  render() {
    const data = this.props.data
    const textJumbo = () => (
      <p className="text-right">
        W latach 2004 - 2020 współtworzyłem firmę Masterprojekt S.C.,
        <br /> pisałem projekty, rozliczałem projekty.
      </p>
    )

    const jumbotronBottom = () => (
      <div className="text-right">
        <MDBProgress
          height="0.2rem"
          value={(this.state.amount / 180) * 100}
          className="my-2"
        />
        <p className="">
          Zrealizowane projekty: {this.state.amount}
          <br />
          Wartość projektów: {this.state.values.toLocaleString()} zł
          <br />
          Pozyskane dotacje: {this.state.grants.toLocaleString()} zł
        </p>
      </div>
    )

    return (
      <Layout>
        {/* <SEO title="Doradztwo" /> */}
        <JumbotronReus
          title={"Piotr Krasny"}
          subtitle={"Doradztwo i finanse"}
          text={textJumbo}
          bottomBar={jumbotronBottom}
          rightBox={this.ShowCurrentProject}
          style={{
            backgroundColor: "#f5f5f5",
            boxShadow: "none",
            minHeight: "520px",
          }}
        />

        <MDBContainer style={{ minHeight: "100vh" }}>
          <MDBRow className="">
            <MDBCol>
              <h2 className="mb-3">Portfolio / zrealizowane projekty </h2>
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-between">
            <MDBCol md="7" className="">
              {this.state.isLoaded && <this.ShowAllProjects />}
            </MDBCol>
            <MDBCol md="4" className="">
              {this.state.isLoaded && <this.ShowFundsList />}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    )
  }
}

export default IndexPage
