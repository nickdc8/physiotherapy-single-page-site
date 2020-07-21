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
  @media (max-width: 520px) {
    flex-direction: column;
    height: fit-content;
    padding: 40px 0 0;
  }
`

const NavLinks = styled.ul`
  display: flex;
  @media (max-width: 520px) {
    margin-top: 32px;
    width: 240px;
    justify-content: space-between;
  }
`

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="Alison Stuart Physiotherapy" />
      </Link>
      <NavLinks>
        <NavLink to="/#services">Services</NavLink>
        <NavLink to="/#about">About</NavLink>
        <NavLink to="/#contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  )
}

export default NavBar
