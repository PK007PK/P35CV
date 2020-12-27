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
    setInterval(this.addValue, 35)
  }

  componentDidUpdate() {}

  ProjectList = () => (
    <div className="d-flex flex-column-reverse flex-wrap justify-content-between">
      {this.state.projects.map(project => (
        <GrantProjectCard
          name={project.podmiot}
          title={project.projekt}
          value={project.wartosc}
          grant={project.dotacja}
        />
      ))}
    </div>
  )

  fundsList = [
    "Fundusze strukturalne 2004 - 2006",
    "Fundusze strukturalne 2007 - 2013",
    "Fundusze strukturalne 2014 - 2020",
    "NFOŚ / WFOŚ",
    'Fundusze EOG / "Norweskie"',
  ]

  GenerateFundsList = () => {
    this.fundsList.map(item => <p>aaa</p>)
  }

  CurrentProject = () => (
    <GrantProjectCard
      style={{ minHeight: "360px", backgroundColor: "#37474F", color: "white" }}
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

  render() {
    const data = this.props.data
    const textJumbo = () => (
      <p className="text-right">
        W latach 2004 - 2020 współtworzyłem firmę Masterprojekt S.C.,
        <br /> pisałem projekty, rozliczałem projekty.
      </p>
    )

    const jumbotronImg = data.placeholderImage.childImageSharp.fluid
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
          rightBox={this.CurrentProject}
          style={{
            backgroundColor: "#f5f5f5",
            boxShadow: "none",
            minHeight: "520px",
          }}
          // imgSource={jumbotronImg}
        />

        {/* <CurrentProject name={this.state.amount} /> */}
        <MDBContainer style={{ minHeight: "100vh" }}>
          <MDBRow>
            <MDBCol>
              <h2 className="mb-3">Portfolio / zrealizowane projekty </h2>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="7" className="">
              {this.state.isLoaded && <this.ProjectList />}
            </MDBCol>
            <MDBCol md="5" className="d-flex flex-column align-items-end ">
              {this.GenerateFundsList}
              <MDBCard
                className="mb-4"
                style={{
                  width: "350px",
                  backgroundColor: "#ffbb33",
                  color: "white",
                }}
              >
                <MDBCardBody>
                  <p className="h4 text-center font-weight-lighter mb-0 ">
                    <MDBIcon far icon="bookmark" className="mr-2" />
                    Fundusze strukturalne 2004 - 2006
                  </p>
                </MDBCardBody>
              </MDBCard>
              <MDBCard
                className="mb-4"
                style={{
                  width: "350px",
                  backgroundColor: "#ffbb33",
                  color: "white",
                }}
              >
                <MDBCardBody>
                  <p className="h4 text-center font-weight-lighter mb-0 ">
                    <MDBIcon far icon="bookmark" className="mr-2" /> Fundusze
                    strukturalne 2007 - 2013
                  </p>
                </MDBCardBody>
              </MDBCard>
              <MDBCard
                className="mb-4"
                style={{
                  width: "350px",
                  backgroundColor: "#ffbb33",
                  color: "white",
                }}
              >
                <MDBCardBody>
                  <p className="h4 text-center font-weight-lighter mb-0 ">
                    <MDBIcon far icon="bookmark" className="mr-2" /> Fundusze
                    strukturalne 2014 - 2020
                  </p>
                </MDBCardBody>
              </MDBCard>
              <MDBCard
                className="mb-4"
                style={{
                  width: "350px",
                  backgroundColor: "#ffbb33",
                  color: "white",
                }}
              >
                <MDBCardBody>
                  <p className="h4 text-center font-weight-lighter mb-0 ">
                    <MDBIcon far icon="bookmark" className="mr-2" /> NFOŚ / WFOŚ
                  </p>
                </MDBCardBody>
              </MDBCard>
              <MDBCard
                className=""
                style={{
                  width: "350px",
                  backgroundColor: "#ffbb33",
                  color: "white",
                }}
              >
                <MDBCardBody>
                  <p className="h4 text-center font-weight-lighter mb-0 ">
                    <MDBIcon far icon="bookmark" className="mr-2" /> Fundusze
                    EOG / "Norweskie"
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    )
  }
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

export default IndexPage
