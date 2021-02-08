import React, { useState, useEffect } from "react"
import { PageContext } from "../components/Layout"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Jumbo from "../components/Jumbo"
import ProgressBarAndStats from "../components/ProgressBarAndStats"
import FundList from "../components/FundList"
import GrantProjectCard from "../components/GrantProjectCard"
import ShowAllProjects from "../components/ShowAllProjects"
import ButtonAnimated from "../components/ButtonAnimated"

import { MDBContainer, MDBRow, MDBCol } from "mdbreact"

import { doradztwoPageTexts } from "../data/consultingPageContent"
import allConsultingProjects from "../data/allConsultingProjects"

const IndexPage = ({ location }) => {
  const [projects, setProjects] = useState([])
  const [amount, setAmount] = useState(0)
  const [values, setValues] = useState(0)
  const [grants, setGrants] = useState(0)
  const [loadingStarted, setLoadingStarted] = useState(false)

  const loadData = () => {
    setLoadingStarted(prevState => !prevState)
  }

  useEffect(() => {
    let interval = null
    if (loadingStarted) {
      interval = setInterval(() => {
        addValue()
      }, 15)
    } else if (!loadingStarted && amount !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [loadingStarted, amount])

  const addValue = () => {
    const newItem = allConsultingProjects[amount]
    if (amount < allConsultingProjects.length) {
      setProjects(prevState => prevState.concat(newItem))
      setAmount(prevState => prevState + 1)
      setValues(
        prevState => prevState + parseInt(newItem.wartosc.replace(/\s/g, ""))
      )
      setGrants(
        prevState => prevState + parseInt(newItem.dotacja.replace(/\s/g, ""))
      )
    }
    return null
  }

  return (
    <Layout
      lang={location && location.state && location.state.lang}
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
                  progres={(amount / 180) * 100}
                  countedAmount={amount}
                  countedProjectsValue={values ? values.toLocaleString() : 0}
                  countedProjectsGrants={grants ? grants.toLocaleString() : 0}
                />
              )}
              rightBox={
                loadingStarted
                  ? () => (
                      <GrantProjectCard
                        whiteText
                        style={{
                          minHeight: "360px",
                          backgroundColor: "#2BBBAD",
                          color: "white",
                        }}
                        name={
                          projects[0]
                            ? projects[projects.length - 1].podmiot
                            : "Loading data"
                        }
                        title={
                          projects[0]
                            ? projects[projects.length - 1].projekt
                            : "Loading data"
                        }
                        value={
                          projects[0]
                            ? projects[projects.length - 1].wartosc
                            : "Loading data"
                        }
                        grant={
                          projects[0]
                            ? projects[projects.length - 1].dotacja
                            : "Loading data"
                        }
                      />
                    )
                  : () => <ButtonAnimated onClick={loadData} />
              }
              style={{
                backgroundColor: "#f5f5f5",
                boxShadow: "none",
                minHeight: "550px",
              }}
            />
            {loadingStarted && (
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
                    {loadingStarted && (
                      <ShowAllProjects projectBase={projects} />
                    )}
                  </MDBCol>
                  <MDBCol md="4" className="">
                    {loadingStarted && (
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

export default IndexPage
