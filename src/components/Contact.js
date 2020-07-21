import React from "react"
import styled from "@emotion/styled"
import Wrapper from "../components/Wrapper"
import { Trafalger, BodyCopy } from "../Typography"
import Form from "../components/Form"
import Line from "./Line"

const Container = styled.div`
  padding: 0 16px;
  margin: 80px 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: none;
  margin-top: 40px;
  grid-gap: 40px;
  @media (max-width: 772px) {
    grid-template-columns: 1fr;
  }
`

const Info = styled.div`
  margin-top: 40px;
  background: none;
  max-width: 80%;
  @media (max-width: 772px) {
    max-width: 100%;
  }
`

const Contact = () => {
  return (
    <div id="contact">
      <Container>
        <Wrapper>
          <Trafalger textStyle="trafalger" mb="24px" textAlign="center">
            Contact
          </Trafalger>
          <Line align="0 auto" />
          <Grid>
            <Form />
            <Info>
              <BodyCopy textStyle="bodyCopy">
                To arrange an appointment, contact me via the contact form, send
                me an <a href="mailto:alision@alisonstuarttherapy.com">email</a>{" "}
                or call me on <a href="tel:+44 7966 111 111">07966 111 111</a>.
              </BodyCopy>
            </Info>
          </Grid>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Contact
