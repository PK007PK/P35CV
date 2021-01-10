import React from "react"
import { PageContext } from "../components/layout"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbo from "../components/jumbo"
import GrantProjectCard from "../components/GrantProjectCard"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBProgress,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardText,
  MDBBtn,
  MDBAnimation,
} from "mdbreact"
import { doradztwoPageTexts } from "../data/consultingPageContent"

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

  componentDidMount() {}

  loadData = () => {
    this.setState(prevState => ({
      isLoaded: !prevState.isLoaded,
    }))
    setInterval(this.addValue, 35)
  }

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

  ShowInitialButton = () => (
    <PageContext.Consumer>
      {({ pl }) => (
        <div
          style={{
            minHeight: "360px",
            width: "100%",
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <MDBAnimation type="rollIn">
              <MDBBtn color="pink" onClick={this.loadData}>
                {pl ? "Wczytaj dane" : "Click to load data"}
              </MDBBtn>
            </MDBAnimation>
          </div>
        </div>
      )}
    </PageContext.Consumer>
  )

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

  ShowFundsList = () => (
    <PageContext.Consumer>
      {({ pl }) =>
        doradztwoPageTexts.programs.map(item => (
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
                {pl ? item[0] : item[1]}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        ))
      }
    </PageContext.Consumer>
  )

  textJumbo = () => (
    <PageContext.Consumer>
      {({ pl }) => (
        <p className="text-right">
          {pl
            ? doradztwoPageTexts.description[0]
            : doradztwoPageTexts.description[1]}
        </p>
      )}
    </PageContext.Consumer>
  )

  jumbotronBottom = () => (
    <PageContext.Consumer>
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
            {pl
              ? doradztwoPageTexts.grants[0]
              : doradztwoPageTexts.grants[1]}:{" "}
            {this.state.grants.toLocaleString()} zł
          </p>
        </div>
      )}
    </PageContext.Consumer>
  )
  render() {
    // const data = this.props.data

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
      <Layout
        lang={
          this.props.location &&
          this.props.location.state &&
          this.props.location.state.lang
        }
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <PageContext.Consumer>
          {({ pl }) => (
            <>
              <SEO title="Doradztwo" />
              <Jumbo
                title={"Piotr Krasny"}
                subtitle={
                  pl ? doradztwoPageTexts.title[0] : doradztwoPageTexts.title[1]
                }
                text={this.textJumbo}
                bottomBar={this.jumbotronBottom}
                rightBox={
                  this.state.isLoaded
                    ? this.ShowCurrentProject
                    : this.ShowInitialButton
                }
                style={{
                  backgroundColor: "#f5f5f5",
                  boxShadow: "none",
                  minHeight: "550px",
                }}
              />
              {this.state.isLoaded && (
                <MDBContainer>
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
              )}
            </>
          )}
        </PageContext.Consumer>
      </Layout>
    )
  }
}

export default IndexPage
