import React, { Component } from "react"
import PropTypes from "prop-types"

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
    return (
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
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem className="mr-3">
                <Link
                  to="/doradztwo"
                  className="nav-link"
                  activeClassName="active"
                >
                  Doradztwo i finanse
                </Link>
              </MDBNavItem>
              <MDBNavItem className="mr-3">
                <Link
                  to="/page-2"
                  className="nav-link"
                  activeClassName="active"
                >
                  Programowanie
                </Link>
              </MDBNavItem>
              <MDBNavItem className="mr-3">
                <Link
                  to="/page-2"
                  className="nav-link"
                  activeClassName="active"
                >
                  Hobby
                </Link>
              </MDBNavItem>
              <MDBNavItem className="mr-5">
                <Link
                  to="/page-2"
                  className="nav-link"
                  activeClassName="active"
                >
                  Kontakt
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <MDBBtn className="btn-sm mr-0" color="pink">
                  Eng
                </MDBBtn>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
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