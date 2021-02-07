import React from "react"
import { PageContext } from "../components/layout"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbo from "../components/jumbo"
import ProgressBarAndStats from "../components/ProgressBarAndStats"
import FundList from "../components/FundList"
import GrantProjectCard from "../components/GrantProjectCard"
import ShowAllProjects from "../components/ShowAllProjects"

import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBBtn } from "mdbreact"

import { doradztwoPageTexts } from "../data/consultingPageContent"
import allConsultingProjects from "../data/allConsultingProjects"

class IndexPage extends React.Component {
  state = {
    projects: [],
    amount: 0,
    values: 0,
    grants: 0,
    loadingStarted: false,
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
    const projectBase = this.state.projects
    return (
      <Layout
        lang={this.props.location.state.lang}
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
                  <p className="text-right">
                    {pl
                      ? doradztwoPageTexts.description[0]
                      : doradztwoPageTexts.description[1]}
                  </p>
                )}
                bottomBar={() => (
                  <ProgressBarAndStats
                    textBase={doradztwoPageTexts}
                    progres={(this.state.amount / 180) * 100}
                    countedAmount={this.state.amount}
                    countedProjectsValue={this.state.values.toLocaleString()}
                    countedProjectsGrants={this.state.grants.toLocaleString()}
                  />
                )}
                rightBox={
                  this.state.loadingStarted
                    ? () => (
                        <GrantProjectCard
                          whiteText
                          style={{
                            minHeight: "360px",
                            backgroundColor: "#2BBBAD",
                            color: "white",
                          }}
                          name={
                            projectBase[0]
                              ? projectBase[projectBase.length - 1].podmiot
                              : "Loading data"
                          }
                          title={
                            projectBase[0]
                              ? projectBase[projectBase.length - 1].projekt
                              : "Loading data"
                          }
                          value={
                            projectBase[0]
                              ? projectBase[projectBase.length - 1].wartosc
                              : "Loading data"
                          }
                          grant={
                            projectBase[0]
                              ? projectBase[projectBase.length - 1].dotacja
                              : "Loading data"
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
                      {this.state.loadingStarted && (
                        <ShowAllProjects projectBase={this.state.projects} />
                      )}
                    </MDBCol>
                    <MDBCol md="4" className="">
                      {this.state.loadingStarted && (
                        <FundList list={doradztwoPageTexts.programs} />
                      )}
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
