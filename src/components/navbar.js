import React, { Component } from "react"
import PropTypes from "prop-types"
import { LanguageContext } from "./layout"

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
                <Link to="/">
                  <i
                    className="fas fa-check-double mr-2"
                    style={{ color: "white" }}
                  ></i>
                  <strong className="white-text">Piotr Krasny</strong>
                </Link>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={this.state.isOpen}
                navbar
              >
                <MDBNavbarNav right>
                  <MDBNavItem className="mr-3">
                    <Link
                      to="/doradztwo"
                      className="nav-link"
                      activeClassName="active"
                    >
                      {pl ? text.item1[0] : text.item1[1]}
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem className="mr-3">
                    <Link
                      to="/programowanie"
                      className="nav-link"
                      activeClassName="active"
                    >
                      {pl ? text.item2[0] : text.item2[1]}
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem className="mr-5">
                    <Link
                      to="/kontakt"
                      className="nav-link"
                      activeClassName="active"
                    >
                      {pl ? text.item3[0] : text.item3[1]}
                    </Link>
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
