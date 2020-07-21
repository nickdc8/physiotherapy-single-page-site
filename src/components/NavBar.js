import React from "react"
import NavLink from "./NavLinks"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import logo from "../images/logo.svg"

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 120px;
  width: 100%;
  max-width: 1200px;
  padding: 0 16px;
`

const NavLinks = styled.ul`
  display: flex;
  @media (max-width: 700px) {
    display: none;
  }
`

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="Alison Stuart Physiotherapy" />
      </Link>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  )
}

export default NavBar
