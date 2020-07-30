import React from "react"
import styled from "@emotion/styled"
import Wrapper from "./Wrapper"
import cspLogo from "../images/csp-logo.svg"
import hcpcLogo from "../images/hcpc.svg"
import physioFirst from "../images/physio-first.svg"

const Logos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  align-items: center;
  justify-items: center;
  padding: 0 16px;
  max-width: 700px;
  margin: 140px auto 120px;

  @media (max-width: 548px) {
    grid-template-columns: 1fr;
  }
`

const Img = styled.img`
  @media (max-width: 548px) {
    width: 120%;
    margin-bottom: 40px;
  }
`

const Container = styled.div`
  margin: 40px auto;
`

const Accreditations = () => {
  return (
    <Wrapper>
      <Container>
        <Logos>
          <a
            href="https://www.csp.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to Chartered to Society of Physiotherapy"
          >
            <Img src={cspLogo} alt="" />
          </a>
          <a
            href="https://www.hcpc-uk.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to Health and Care Professions Council"
          >
            <Img src={hcpcLogo} alt="" />
          </a>
          <a
            href="https://www.physiofirst.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to Physio First"
          >
            <Img src={physioFirst} alt="" />
          </a>
        </Logos>
      </Container>
    </Wrapper>
  )
}

export default Accreditations
