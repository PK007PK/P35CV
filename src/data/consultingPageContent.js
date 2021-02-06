import React from "react"
import { PageContext } from "../components/layout"
import GrantProjectCard from "../components/GrantProjectCard"
import {
  MDBProgress,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardText,
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

export const ShowAllProjects = ({ projectBase }) => (
  <div className="d-flex flex-column-reverse flex-wrap justify-content-between">
    {projectBase.map((project, index) => (
      <GrantProjectCard
        key={index}
        name={project.podmiot}
        title={project.projekt}
        value={project.wartosc}
        grant={project.dotacja}
        style={{ marginBottom: "1.5rem" }}
      />
    ))}
  </div>
)

export const ShowFundsList = () => (
  <PageContext.Consumer>
    {({ pl }) =>
      doradztwoPageTexts.programs.map((item, index) => (
        <MDBCard
          key={index}
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

export const ShowCurrentProject = ({ name, title, value, grant }) => (
  <GrantProjectCard
    whiteText
    style={{ minHeight: "360px", backgroundColor: "#2BBBAD", color: "white" }}
    name={name}
    title={title}
    value={value}
    grant={grant}
  />
)
