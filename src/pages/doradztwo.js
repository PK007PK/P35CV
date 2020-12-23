import React from "react"
import { Link } from "gatsby"

// import SEO from "../components/seo"
import Layout from "../components/layout"
import SubpageHeading from "../components/subpageHeading"
import JumbotronReus from "../components/JumbotronReus"
import { MDBContainer, MDBRow, MDBCol, MDBProgress } from "mdbreact"
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

  ProjectList = () =>
    this.state.projects.map(project => (
      <GrantProjectCard
        name={project.podmiot}
        title={project.projekt}
        value={project.wartosc}
        grant={project.dotacja}
      />
    ))

  CurrentProject = () => (
    <GrantProjectCard
      style={{ minHeight: "360px", backgroundColor: "#fff3e0" }}
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
        W latach 2004 - 2020 współtworzyłem firmę Masterprojekt S.C. zajmującą
        się pozyskiwaniem dotacji na finansowanie projektów inwestycyjnych.
      </p>
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
          <MDBRow className="my-5">
            <MDBCol>
              <div className="d-flex align-items-start">
                <h2 className="text-center">
                  Portfolio / zrealizowane projekty{" "}
                </h2>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="d-flex flex-column-reverse flex-wrap justify-content-between">
              {this.state.isLoaded && <this.ProjectList />}
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
