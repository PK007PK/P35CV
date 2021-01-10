import React from "react"
import { PageContext } from "../components/layout"
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

export const doradztwoPageTexts = {
  title: ["Doradztwo i  finanse", "Consulting and finance"],
  description: [
    "W latach 2004 - 2020 współtworzyłem firmę Masterprojekt S.C., przygotowywałem projekty, sporządzałem analizy finansowe, rozliczałem projekty",
    "In the years 2004-2020, I co-founded Masterprojekt S.C., prepared projects, prepared financial analyses, settled projects",
  ],
  projectsAmount: ["Zrealizowane projekty", "Completed projects"],
  projectsValue: ["Wartość projektów", "Projects value"],
  grants: ["Pozyskane dotacje", "Grants received"],
  subtitle: [
    "Portfolio / zrealizowane projekty",
    "Portfolio / completed projects",
  ],
  programs: [
    ["Fundusze strukturalne 2004 - 2006", "Structural Funds 2004 - 2006"],
    ["Fundusze strukturalne 2007 - 2013", "Structural Funds 2007 - 2013"],
    ["Fundusze strukturalne 2014 - 2020", "Structural Funds 2014 - 2020"],
    ["NFOŚ / WFOŚ", "NFOŚ / WFOŚ"],
    ['Fundusze EOG / "Norweskie"', "Iceland, Liechtenstein, Norway Grants"],
  ],
}

export const ShowInitialButton = ({ fn }) => (
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
            <MDBBtn color="pink" onClick={fn}>
              {pl ? "Wczytaj dane" : "Click to load data"}
            </MDBBtn>
          </MDBAnimation>
        </div>
      </div>
    )}
  </PageContext.Consumer>
)

export const TextJumbo = ({ text }) => (
  <PageContext.Consumer>
    {({ pl }) => <p className="text-right">{text}</p>}
  </PageContext.Consumer>
)

export const ProgresBarAndStats = ({
  progres,
  countedAmount,
  countedProjectsValue,
  countedProjectsGrants,
}) => (
  <PageContext.Consumer>
    {({ pl }) => (
      <div className="text-right">
        <MDBProgress height="0.2rem" value={progres} className="my-2" />
        <p className="">
          {pl
            ? doradztwoPageTexts.projectsAmount[0]
            : doradztwoPageTexts.projectsAmount[1]}
          : {countedAmount}
          <br />
          {pl
            ? doradztwoPageTexts.projectsValue[0]
            : doradztwoPageTexts.projectsValue[1]}
          : {countedProjectsValue} zł
          <br />
          {pl
            ? doradztwoPageTexts.grants[0]
            : doradztwoPageTexts.grants[1]}: {countedProjectsGrants} zł
        </p>
      </div>
    )}
  </PageContext.Consumer>
)
