import React from "react"
import Wrapper from "./Wrapper"
import { Trafalger } from "../Typography"
import aboutImage from "../images/alison-about.jpg"
import styled from "@emotion/styled"
import { BodyCopy } from "../Typography"
import Line from "./Line"

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
  padding: 0 16px;
  margin-top: 72px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 0px;
  }
`
const Image = styled.img`
  height: 260px;
  border-radius: 2px;
`

const TextContainer = styled.div`
  max-width: 80%;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0;
  }
`

const About = () => {
  return (
    <div id="about">
      <Wrapper>
        <Trafalger textStyle="trafalger" mb="24px" textAlign="center">
          About me
        </Trafalger>
        <Line align="0 auto" />
        <Container>
          <TextContainer>
            <BodyCopy textStyle="bodyCopy">
              Alison Stuart is a Chartered Physiotherapist with over 25 years of
              experience. She has a wealth of experience and has previously
              worked for the NHS both in adult and paediatric care, at Stoke
              Mandeville hospital in their specialist spinal injuries unit as
              well as other private practices and professional sports teams.
            </BodyCopy>
            <BodyCopy textStyle="bodyCopy">
              Her most diverse experience was a time working for a professional
              basketball team. "I worked for five years with the Chester Jets.
              We travelled all over Europe, and I have to say it was great fun
              and an amazing experience for me."
            </BodyCopy>
          </TextContainer>
          <ImageContainer>
            <Image src={aboutImage} alt="" />
          </ImageContainer>
        </Container>
      </Wrapper>
    </div>
  )
}

export default About
