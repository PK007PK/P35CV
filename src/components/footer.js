import React from "react"

import { MDBContainer, MDBRow, MDBCol, MDBFooter } from "mdbreact"
const Footer = () => {
  return (
    <MDBFooter color="unique-color-dark" className="font-small">
      <div className="footer-copyright py-3">
        <MDBContainer>
          <MDBRow>
            <MDBCol
              md="3"
              className="d-flex justify-content-center justify-content-md-start"
            >
              <p className="text-center text-md-start mb-0">
                <i className="fas fa-phone-alt mr-1"></i>509 527 925
              </p>
            </MDBCol>
            <MDBCol
              md="6"
              className="my-2 my-md-0 d-flex justify-content-center"
            >
              <p className="mb-0">
                Built with: <i className="fab fa-react ml-5 mr-1"></i>React
                <i className="gatsbyIcon ml-4 mr-1"></i>Gatsby
                <i className="fab fa-mdb ml-4 mr-1"></i>MDBootstrap
              </p>
            </MDBCol>
            <MDBCol
              md="3"
              className="d-flex justify-content-center justify-content-md-end"
            >
              <p className="mb-0">
                <i className="far fa-copyright mr-1"></i>Piotr Krasny
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
