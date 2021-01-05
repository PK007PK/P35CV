import React from "react"

import { LanguageContext } from "../components/layout"
import { MDBContainer, MDBRow, MDBCol, MDBFooter, MDBTooltip } from "mdbreact"
const Footer = ({ printFn }) => {
  return (
    <LanguageContext.Consumer>
      {({ pl }) => (
        <MDBFooter color="unique-color-dark" className="font-small">
          <div className="footer-copyright py-3">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="3" className="">
                  <p className="text-center text-md-left mb-md-0">
                    <i className="fas fa-phone-alt mr-1"></i>509 527 925
                  </p>
                </MDBCol>
                <MDBCol md="6" className="">
                  <p className="text-center mb-md-0">
                    Built with:{" "}
                    <i className="fab fa-react ml-2 ml-md-5 mr-1"></i>
                    React
                    <i className="gatsbyIcon ml-2 ml-md-4 mr-1"></i>Gatsby
                    <i className="fab fa-mdb ml-2 ml-md-4 mr-1"></i>MDBootstrap
                  </p>
                </MDBCol>
                <MDBCol md="3" className="">
                  <p className="text-center text-md-right mb-0">
                    <i className="far fa-copyright mr-1"></i>Piotr Krasny
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </MDBFooter>
      )}
    </LanguageContext.Consumer>
  )
}

export default Footer
