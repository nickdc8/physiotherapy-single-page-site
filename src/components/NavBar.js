import React from "react"
import NavLink from "./NavLinks"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 120px;
  width: 100%;
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
        <h4>Logo</h4>
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
