import React from "react"
import styled from "@emotion/styled"
import Wrapper from "../components/Wrapper"
import theme from "../theme"

const Container = styled.div`
  background: ${theme.colors.charcoal};
  color: white;
  height: 80px;
  padding: 20px 0;
  width: 100%;
`

const Footer = () => {
  return (
    <Container>
      <Wrapper>footer</Wrapper>
    </Container>
  )
}

export default Footer
