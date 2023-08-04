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
    padding: 16px;
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
              header="Mobile Physiotherapy"
              content="Our mobile physiotherapy service brings treatment tailored to your needs directly to your doorstep, saving you the stress of travel. Experience personalized care from the comfort of your own home."
            />
            <Card
              iconUrl={careIcon}
              header="Elderly Physiotherapy"
              content="We specialize in providing physiotherapy for the elderly in residential and nursing homes, as well as sheltered accommodations. Our services include individualized treatments and group exercise classes."
            />
            <Card
              iconUrl={homeIcon}
              header="Private Clinic Sessions"
              content="Visit our professional clinic, located in a safe and private environment. We cater to people of all ages, offering top-notch care and treatment for various conditions."
            />
          </Grid>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Services
