import React from "react"
import styled from "@emotion/styled"
import Wrapper from "../components/Wrapper"
import theme from "../theme"
import { Trafalger } from "../Typography"

const Container = styled.div`
  background: ${theme.colors.parchment};
  padding: 80px 16px;
`

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Trafalger textStyle="trafalger" textAlign="center">
          Contact
        </Trafalger>
      </Wrapper>
    </Container>
  )
}

export default Contact
