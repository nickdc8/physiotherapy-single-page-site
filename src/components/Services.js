import React from "react"
import styled from "@emotion/styled"
import Wrapper from "./Wrapper"
import { Trafalger } from "../Typography"
import Card from "./Card"
import careIcon from "../images/careIcon.svg"
import carIcon from "../images/carIcon.svg"
import homeIcon from "../images/homeIcon.svg"
import Line from "./Line"

const Container = styled.div`
  padding: 80px 16px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin: 32px auto;
  background: none;
  max-width: 1100px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Services = () => {
  return (
    <div id="services">
      <Container>
        <Wrapper>
          <Trafalger textStyle="trafalger" textAlign="center" mb="24px">
            Services
          </Trafalger>
          <Line align="0 auto 60px" />
          <Grid>
            <Card
              iconUrl={carIcon}
              header="Mobile Physio"
              content="I provide mobile physiotherapy, meaning that you can save yourself the stress of travelling and undergo a treatment plan tailored to your needs from the comfort of your own home. "
            />
            <Card
              iconUrl={careIcon}
              header="Elderly & Children Care"
              content="I also offer physiotherapy for the elderly in residential and nursing homes along with sheltered accommodations, specialising in both individual physiotherapy and group exercise classes."
            />
            <Card
              iconUrl={homeIcon}
              header="Private Clinic"
              content="If you would prefer, you can access my professional clinic that I run from home, where I can treat people of all ages in a safe private environment."
            />
          </Grid>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Services
