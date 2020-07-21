import React from "react"
import { Canon } from "../Typography"
import styled from "@emotion/styled"
import heroImage from "../images/hero-image.png"
import theme from "../theme"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${heroImage});
  background-position: 40% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 440px;
  margin: 0 auto;

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
  line-height: 1.6rem;
  font-weight: 300;
  font-size: 1rem;
  font-family: ${theme.fonts.sansSerif};
  padding: 0 16px;
`

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Canon mt="20px" mb="16px" textStyle="canon" textAlign="center">
          Your health in expert hands
        </Canon>
        <Subhead>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum.
        </Subhead>
      </Container>
    </Wrapper>
  )
}

export default Hero
