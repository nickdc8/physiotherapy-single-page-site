import React from "react"
import styled from "@emotion/styled"
import Wrapper from "../components/Wrapper"
import theme from "../theme"
import { BodyCopy } from "../Typography"

const Container = styled.div`
  border-top: 1px solid ${theme.colors.parchment};
  color: ${theme.colors.charcoal};
  height: 80px;
  padding: 20px 16px;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <BodyCopy textStyle="copyright" textAlign="center">
          © Alison Stewart Physiotherapy 2020
        </BodyCopy>
      </Wrapper>
    </Container>
  )
}

export default Footer
