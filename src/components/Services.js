import React from "react"
import styled from "@emotion/styled"
import theme from "../theme"
import Wrapper from "./Wrapper"
import { Trafalger } from "../Typography"
import Card from "./Card"

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

const cardContent = [
  {
    id: 1,
    iconUrl: "../../static/carIcon.svg",
    content:
      "I provide mobile physiotherapy in cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
  },
  {
    id: 2,
    iconUrl: "../../static/care.svg",
    content:
      "I provide home-based physiotherapy for the elderly, delivering comprehensive treatment and education for both patients and their wider family. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor.",
  },
  {
    id: 3,
    iconUrl: "../images/carIcon.svg",
    content:
      "Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
  },
]

const Services = () => {
  const cardItem = cardContent.map(data => {
    return <Card key={data.id} data={data} />
  })
  return (
    <Container>
      <Wrapper>
        <Trafalger textStyle="trafalger" textAlign="center" mb="56px">
          Services
        </Trafalger>
        <Grid>{cardItem}</Grid>
      </Wrapper>
    </Container>
  )
}

export default Services
