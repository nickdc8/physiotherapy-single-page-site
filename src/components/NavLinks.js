import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { color, textStyle } from "styled-system"
import theme from "../theme"

const LinkStyle = styled(Link)`
  ${color}
  ${textStyle}
  margin-left: 24px;
  padding: 0.25rem;
  transition: 0.3s;
  @media (max-width: 520px) {
    margin-left: 0px;
  }

  &:hover {
    color: ${theme.colors.dolphin};
  }
`

const activeStyles = {
  borderBottom: `2px solid ${theme.colors.calico}`,
}

const NavLink = ({ children, to }) => (
  <LinkStyle textStyle="navlink" to={to} activeStyle={activeStyles}>
    {children}
  </LinkStyle>
)

export default NavLink
