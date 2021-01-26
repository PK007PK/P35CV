import React, { Component } from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { PageContext } from "./layout"

import {
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBBtn,
  MDBTooltip,
} from "mdbreact"

class Navbar extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const text = {
      item1: ["Doradztwo i finanse", "Consulting and finance"],
      item2: ["Programowanie", "Programming"],
      item3: ["Kontakt", "Contact"],
    }

    return (
      <PageContext.Consumer>
        {({ pl, changeFn }) => (
          <nav
            className="navbar navbar-expand-lg navbar-dark shadow-none"
            style={{ backgroundColor: "#1C2331" }}
          >
            <div className="container">
              <MDBNavbarBrand>
                <AniLink
                  state={{ lang: pl ? "pl" : "eng" }}
                  cover
                  bg="#1C2331"
                  duration={0.4}
                  to="/"
                >
                  <i
                    className="fas fa-check-double mr-2"
                    style={{ color: "white" }}
                  ></i>
                  <strong className="white-text">Piotr Krasny</strong>
                </AniLink>
              </MDBNavbarBrand>
              <button
                onClick={this.toggleCollapse}
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={
                  this.state.isOpen
                    ? "collapse show navbar-collapse"
                    : "collapse navbar-collapse"
                }
                id="navbarNav"
              >
                <MDBNavbarNav right>
                  <MDBNavItem className="mr-3">
                    <AniLink
                      state={{ lang: pl ? "pl" : "eng" }}
                      cover
                      bg="#1C2331"
                      duration={0.4}
                      to="/"
                      className="nav-link"
                      activeStyle={{
                        fontWeight: "bold",
                      }}
                    >
                      {pl ? "Główna" : "Home"}
                    </AniLink>
                  </MDBNavItem>
                  <MDBNavItem className="mr-3">
                    <AniLink
                      state={{ lang: pl ? "pl" : "eng" }}
                      cover
                      bg="#1C2331"
                      duration={0.4}
                      to="/consulting"
                      className="nav-link"
                      activeStyle={{
                        fontWeight: "bold",
                      }}
                    >
                      {pl ? text.item1[0] : text.item1[1]}
                    </AniLink>
                  </MDBNavItem>
                  <MDBNavItem className="mr-3">
                    <AniLink
                      cover
                      state={{ lang: pl ? "pl" : "eng" }}
                      bg="#1C2331"
                      duration={0.4}
                      to="/programming"
                      className="nav-link"
                      activeStyle={{
                        fontWeight: "bold",
                      }}
                    >
                      {pl ? text.item2[0] : text.item2[1]}
                    </AniLink>
                  </MDBNavItem>
                  <MDBNavItem className="mr-5">
                    <AniLink
                      cover
                      bg="#1C2331"
                      duration={0.4}
                      state={{ lang: pl ? "pl" : "eng" }}
                      to="/contact"
                      className="nav-link"
                      activeStyle={{
                        fontWeight: "bold",
                      }}
                    >
                      {pl ? text.item3[0] : text.item3[1]}
                    </AniLink>
                  </MDBNavItem>
                  {this.props.pathname === "/" && (
                    <MDBNavItem className="d-none d-md-flex align-items-center mr-1">
                      <MDBTooltip domElement tag="span" placement="bottom">
                        <span>
                          <MDBBtn
                            className="btn-sm"
                            onClick={this.props.printFn}
                          >
                            <i className="fas fa-print"></i>
                          </MDBBtn>
                        </span>
                        <span>{pl ? "Wesja do druku" : "Print version"}</span>
                      </MDBTooltip>
                    </MDBNavItem>
                  )}
                  <MDBNavItem style={{ transition: "none" }}>
                    <MDBBtn
                      onClick={changeFn()}
                      className="btn-sm mr-0 nav-link test"
                      color="pink"
                      style={{ width: "80px", transition: "none" }}
                    >
                      {pl ? "Eng" : "Pl"}
                    </MDBBtn>
                  </MDBNavItem>
                </MDBNavbarNav>
              </div>
            </div>
          </nav>
        )}
      </PageContext.Consumer>
    )
  }
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
