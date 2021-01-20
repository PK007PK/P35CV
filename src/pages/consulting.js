import React from "react"
import { PageContext } from "../components/layout"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbo from "../components/jumbo"
import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBBtn } from "mdbreact"

import {
  doradztwoPageTexts,
  TextJumbo,
  ProgresBarAndStats,
  ShowAllProjects,
  ShowFundsList,
  ShowCurrentProject,
} from "../data/consultingPageContent"

import allConsultingProjects from "../data/allConsultingProjects"

class IndexPage extends React.Component {
  interveal = ""
  state = {
    projects: [],
    amount: 0,
    values: 0,
    grants: 0,
    isLoaded: false,
    loadingStarted: false,
  }

  componentDidMount() {
    this.setState(prevState => ({ isLoaded: !prevState.isLoaded }))
  }

  loadData = () => {
    this.setState(prevState => ({
      loadingStarted: !prevState.loadingStarted,
    }))
    setInterval(this.addValue, 35)
  }

  addValue = () => {
    const n = this.state.amount
    const newItem = allConsultingProjects[n]
    if (this.state.amount < allConsultingProjects.length) {
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
            <MDBAnimation reveal type="rollIn">
              <MDBBtn color="pink" onClick={this.loadData}>
                {pl ? "Wczytaj dane" : "Click to load data"}
              </MDBBtn>
            </MDBAnimation>
          </div>
        </div>
      )}
    </PageContext.Consumer>
  )

  render() {
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
                text={() => (
                  <TextJumbo
                    text={
                      pl
                        ? doradztwoPageTexts.description[0]
                        : doradztwoPageTexts.description[1]
                    }
                  />
                )}
                bottomBar={() => (
                  <ProgresBarAndStats
                    progres={(this.state.amount / 180) * 100}
                    countedAmount={this.state.amount}
                    countedProjectsValue={this.state.values.toLocaleString()}
                    countedProjectsGrants={this.state.grants.toLocaleString()}
                  />
                )}
                rightBox={
                  this.state.loadingStarted
                    ? () => (
                        <ShowCurrentProject
                          name={
                            this.state.projects[0]
                              ? this.state.projects[
                                  this.state.projects.length - 1
                                ].podmiot
                              : "Ładowanie"
                          }
                          title={
                            this.state.projects[0]
                              ? this.state.projects[
                                  this.state.projects.length - 1
                                ].projekt
                              : "Ładowanie"
                          }
                          value={
                            this.state.projects[0]
                              ? this.state.projects[
                                  this.state.projects.length - 1
                                ].wartosc
                              : "Ładowanie"
                          }
                          grant={
                            this.state.projects[0]
                              ? this.state.projects[
                                  this.state.projects.length - 1
                                ].dotacja
                              : "Ładowanie"
                          }
                        />
                      )
                    : this.ShowInitialButton
                }
                style={{
                  backgroundColor: "#f5f5f5",
                  boxShadow: "none",
                  minHeight: "550px",
                }}
              />

              {this.state.loadingStarted && (
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
                      {this.state.isLoaded && (
                        <ShowAllProjects projectBase={this.state.projects} />
                      )}
                    </MDBCol>
                    <MDBCol md="4" className="">
                      {this.state.isLoaded && <ShowFundsList />}
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
