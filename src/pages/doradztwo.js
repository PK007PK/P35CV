import React from "react"

import { doradztwoPageTexts } from "../data/doradztwoPageText"
import { LanguageContext } from "../components/layout"

// import SEO from "../components/seo"
import Layout from "../components/layout"

import JumbotronReus from "../components/JumbotronReus"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBProgress,
  MDBCard,
  MDBCardBody,
  MDBIcon,
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

  ShowFundsList = () =>
    this.fundsList.map(item => (
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

  render() {
    // const data = this.props.data
    const textJumbo = () => (
      <LanguageContext.Consumer>
        {({ pl }) => (
          <p className="text-right">
            {pl
              ? doradztwoPageTexts.description[0]
              : doradztwoPageTexts.description[1]}
          </p>
        )}
      </LanguageContext.Consumer>
    )

    const jumbotronBottom = () => (
      <LanguageContext.Consumer>
        {({ pl }) => (
          <div className="text-right">
            <MDBProgress
              height="0.2rem"
              value={(this.state.amount / 180) * 100}
              className="my-2"
            />
            <p className="">
              {pl
                ? doradztwoPageTexts.projectsAmount[0]
                : doradztwoPageTexts.projectsAmount[1]}
              : {this.state.amount}
              <br />
              {pl
                ? doradztwoPageTexts.projectsValue[0]
                : doradztwoPageTexts.projectsValue[1]}
              : {this.state.values.toLocaleString()} zł
              <br />
              {pl ? doradztwoPageTexts.grants[0] : doradztwoPageTexts.grants[1]}
              : {this.state.grants.toLocaleString()} zł
            </p>
          </div>
        )}
      </LanguageContext.Consumer>
    )

    return (
      <Layout
        lang={
          this.props.location &&
          this.props.location.state &&
          this.props.location.state.lang
        }
      >
        <LanguageContext.Consumer>
          {({ pl }) => (
            <>
              <JumbotronReus
                title={"Piotr Krasny"}
                subtitle={
                  pl ? doradztwoPageTexts.title[0] : doradztwoPageTexts.title[1]
                }
                text={textJumbo}
                bottomBar={jumbotronBottom}
                rightBox={this.ShowCurrentProject}
                style={{
                  backgroundColor: "#f5f5f5",
                  boxShadow: "none",
                  minHeight: "550px",
                }}
              />

              <MDBContainer style={{ minHeight: "100vh" }}>
                <MDBRow className="">
                  <MDBCol>
                    <h2 className="mb-3">
                      {pl
                        ? doradztwoPageTexts.subtitle[0]
                        : doradztwoPageTexts.subtitle[1]}
                    </h2>
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
            </>
          )}
        </LanguageContext.Consumer>
      </Layout>
    )
  }
}

export default IndexPage
