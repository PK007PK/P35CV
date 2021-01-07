import React, { Component } from "react"
import PropTypes from "prop-types"
import { LanguageContext } from "./layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
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
      <LanguageContext.Consumer>
        {({ pl, changeFn }) => (
          <MDBNavbar color="unique-color-dark" dark expand="lg">
            <MDBContainer>
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
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={this.state.isOpen}
                navbar
              >
                <MDBNavbarNav right>
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
                    <MDBNavItem className="mr-1 d-flex align-items-center">
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
                  <MDBNavItem>
                    <MDBBtn
                      onClick={changeFn()}
                      className="btn-sm mr-0"
                      color="pink"
                      style={{ width: "80px" }}
                    >
                      {pl ? "Eng" : "Pl"}
                    </MDBBtn>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        )}
      </LanguageContext.Consumer>
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
