import React from "react"
import { PageContext } from "../components/layout"
import { MDBBtn, MDBAnimation } from "mdbreact"

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
