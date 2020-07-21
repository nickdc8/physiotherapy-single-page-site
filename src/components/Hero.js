import React from "react"
import { Canon } from "../Typography"
import styled from "@emotion/styled"
import heroImage from "../images/hero-image.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: -25px 30px;
  background-repeat: no-repeat;
  height: 500px;

  @media (max-width: 768px) {
    background-position: -145px 0px;
  }
  @media (max-width: 414px) {
    background-position: -315px 0px;
    height: 380px;
  }
`

const Subhead = styled.p`
  text-align: center;
  line-height: 1.3rem;
  font-weight: 300;
  font-size: 1rem;
`

const Hero = () => {
  return (
    <Container>
      <Canon mb="20px" textStyle="canon" textAlign="center">
        Your health in expert hands
      </Canon>
      <Subhead>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum.
      </Subhead>
    </Container>
  )
}

export default Hero
