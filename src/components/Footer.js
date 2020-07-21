import React from "react"
import styled from "@emotion/styled"
import Wrapper from "../components/Wrapper"
import theme from "../theme"
import { BodyCopy } from "../Typography"

const Container = styled.div`
  background: ${theme.colors.parchment};
  color: ${theme.colors.charcoal};
  height: 80px;
  padding: 20px 16px;
  width: 100%;
`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <BodyCopy textStyle="copyright">
          © Alison Stewart Physiotherapy 2020
        </BodyCopy>
      </Wrapper>
    </Container>
  )
}

export default Footer
