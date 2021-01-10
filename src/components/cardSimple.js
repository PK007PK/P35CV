import React from "react"

import { MDBCard, MDBCardBody, MDBAnimation } from "mdbreact"

const CardSimple = ({ children, text, icons }) => (
  <MDBAnimation reveal type="slideInUp">
    <MDBCard className="my-3 mt-md-0">
      {icons && <MDBCardBody>{children}</MDBCardBody>}
      {text && (
        <MDBCardBody>
          <p className="h4 text-center font-weight-lighter mb-0">{children}</p>
        </MDBCardBody>
      )}
    </MDBCard>
  </MDBAnimation>
)

export default CardSimple
