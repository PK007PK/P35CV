import React from "react"
import PropTypes from "prop-types"

const CardSimple = ({ children, text, icons }) => (
  <div className="card my-3 mt-md-0">
    {icons && <div className="card-body">{children}</div>}
    {text && (
      <div className="card-body">
        <p className="h4 text-center font-weight-lighter mb-0">{children}</p>
      </div>
    )}
  </div>
)

CardSimple.propTypes = {
  text: PropTypes.bool,
  icons: PropTypes.bool,
}

export default CardSimple
