import React from "react"
import { Link } from "gatsby"

const LinkStyles = {
  color: "black",
  textDecoration: "none",
  margin: "0 8px",
  padding: "0.25rem",
  fontSize: "16px",
  display: "block",
  borderBottom: "2px solid transparent",
}

const activeStyles = {
  borderBottom: "2px solid red",
}

const NavLink = ({ children, to }) => (
  <Link to={to} style={LinkStyles} activeStyles={activeStyles}>
    {children}
  </Link>
)

export default NavLink
