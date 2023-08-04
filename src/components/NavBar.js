import React from "react"
import NavLink from "./NavLinks"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import logo from "../images/logo.svg"

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto;
  height: 80px;
  width: 100%;
  max-width: 1200px;
  padding: 0 16px;
  @media (max-width: 520px) {
    flex-direction: column;
    height: fit-content;
    margin: 0 auto;
    padding: 40px 0 0;
  }
`

const NavLinks = styled.ul`
  display: flex;
  @media (max-width: 520px) {
    margin-top: 16px;
    width: 100%;
    justify-content: space-between;
    font-size: 24px;
    padding: 0 32px;
  }
  @media (max-width: 320px) {
    margin-top: 16px;
    width: 100%;
    justify-content: space-between;
    font-size: 24px;
    padding: 0 8px;
  }
`

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <img
          src={logo}
          alt="Wellmotion Physiotherapy"
          style={{ width: "180px", height: "auto" }}
        />
      </Link>
      <NavLinks>
        <NavLink to="/#services">Services</NavLink>
        <NavLink to="/#about">About</NavLink>
        <NavLink to="/#contact">Contact</NavLink>
        <NavLink to="/#testimonials">Testimonials</NavLink>
      </NavLinks>
    </Nav>
  )
}

export default NavBar
