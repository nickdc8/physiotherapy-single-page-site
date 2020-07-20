import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { color, textStyle } from "styled-system"
import theme from "../theme"

const LinkStyle = styled(Link)`
  ${color}
  ${textStyle}
  margin-left: 40px;
  padding: 0.25rem;
`

const activeStyles = {
  borderBottom: `2px solid ${theme.colors.calico}`,
}

const NavLink = ({ children, to }) => (
  <LinkStyle
    color="charcoal"
    textStyle="navlink"
    to={to}
    activeStyle={activeStyles}
  >
    {children}
  </LinkStyle>
)

export default NavLink
