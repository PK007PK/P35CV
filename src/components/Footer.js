import React from "react"

const Footer = () => {
  return (
    <div style={{backgroundColor: "#1c2331"}} className="font-small">
      <div className="footer-copyright text-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <p className="text-center text-md-left mb-md-0">
                <i className="fas fa-phone-alt mr-1"></i>509 527 925
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p className="text-center mb-md-0">
                Built with: <i className="fab fa-react ml-2 ml-md-5 mr-1"></i>
                React
                <i className="gatsbyIcon ml-2 ml-md-4 mr-1"></i>Gatsby
                <i className="fab fa-mdb ml-2 ml-md-4 mr-1"></i>MDBootstrap
              </p>
            </div>
            <div className="col-12 col-md-3">
              <p className="text-center text-md-right mb-0">
                <i className="far fa-copyright mr-1"></i>Piotr Krasny
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
