import React from "react"
import styled from "@emotion/styled"
import theme from "../theme"
import Wrapper from "./Wrapper"
import { Trafalger } from "../Typography"
import Card from "./Card"
import careIcon from "../images/careIcon.svg"
import carIcon from "../images/carIcon.svg"

const Container = styled.div`
  background: ${theme.colors.parchment};
  padding: 80px 16px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin: 32px auto;
  background: none;
  max-width: 1000px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Services = () => {
  return (
    <Container>
      <Wrapper>
        <Trafalger textStyle="trafalger" textAlign="center" mb="56px">
          Services
        </Trafalger>
        <Grid>
          <Card
            iconUrl={carIcon}
            header="Mobile Physio"
            content="I provide mobile physiotherapy, meaning that you can undergo a treatment plan tailored to your needs from the comfort of your own home. Why not get in touch with us and save yourself the stress of travelling."
          />
          <Card
            iconUrl={careIcon}
            header="Elderly & Children Care"
            content="I also offer physiotherapy for the elderly in residential and nursing homes along with sheltered accommodations, specialising in both individual physiotherapy and group exercise classes."
          />
          <Card
            iconUrl={careIcon}
            header="Another Service Here"
            content="Justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
          />
        </Grid>
      </Wrapper>
    </Container>
  )
}

export default Services
