import React, { Component } from "react"
import PropTypes from "prop-types"
import { LanguageContext } from "./layout"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Link } from "gatsby"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBBtn,
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
      item1: ["Doradztwo i finanse", "xzx"],
      item2: ["Programowanie", "zxxz"],
      item3: ["Kontakt", "zxzx"],
    }

    return (
      <LanguageContext.Consumer>
        {({ pl, changeFn }) => (
          <MDBNavbar color="unique-color-dark" dark expand="md">
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
                      to="/doradztwo"
                      className="nav-link"
                      activeClassName="active"
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
                      to="/programowanie"
                      className="nav-link"
                      activeClassName="active"
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
                      to="/kontakt"
                      className="nav-link"
                      activeClassName="active"
                    >
                      {pl ? text.item3[0] : text.item3[1]}
                    </AniLink>
                  </MDBNavItem>
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
