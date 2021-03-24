import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom";
import AniLink from "gatsby-plugin-transition-link/AniLink"

import AppContext from '../AppProvider';

import {
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBBtn,
  MDBTooltip,
} from "mdbreact"

const Navbar = ({pathname}) => {
  const { pl, changePrint, changeLanguage } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false)
  const toggleCollapse = () => setIsOpen((prevState)=>!prevState)

  const text = {
    item1: ["Doradztwo i finanse", "Consulting and finance"],
    item2: ["Programowanie", "Programming"],
    item3: ["Kontakt", "Contact"],
  }

  return ( 
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-none"
      style={{ backgroundColor: "#1C2331" }}
    >
      <div className="container">
        <MDBNavbarBrand>
          <AniLink
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
          onClick={toggleCollapse}
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
            isOpen
              ? "collapse show navbar-collapse"
              : "collapse navbar-collapse"
          }
          id="navbarNav"
        >
          <MDBNavbarNav right>
            <MDBNavItem className="mr-3">
              <AniLink
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
                to="/contact"
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                }}
              >
                {pl ? text.item3[0] : text.item3[1]}
              </AniLink>
            </MDBNavItem>
            {pathname === "/" && (
              <MDBNavItem className="d-none d-md-flex align-items-center mr-1">
                <MDBTooltip domElement tag="span" placement="bottom">
                  <span>
                    <MDBBtn
                      className="btn-sm"
                      onClick={changePrint}
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
                onClick={changeLanguage}
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
  )
}


Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
