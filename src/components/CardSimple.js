import React from "react"
import PropTypes from "prop-types"

import { MDBCard, MDBCardBody } from "mdbreact"

const CardSimple = ({ children, text, icons }) => (
  <MDBCard className="my-3 mt-md-0">
    {icons && <MDBCardBody>{children}</MDBCardBody>}
    {text && (
      <MDBCardBody>
        <p className="h4 text-center font-weight-lighter mb-0">{children}</p>
      </MDBCardBody>
    )}
  </MDBCard>
)

CardSimple.propTypes = {
  text: PropTypes.bool,
  icons: PropTypes.bool,
}

export default CardSimple