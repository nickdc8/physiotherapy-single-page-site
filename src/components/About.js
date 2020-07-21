import React from "react"
import Wrapper from "./Wrapper"
import { Trafalger } from "../Typography"
import aboutImage from "../images/alison-about.jpg"
import styled from "@emotion/styled"
import { BodyCopy } from "../Typography"

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.74fr 1fr;
  grid-gap: 40px;
  padding: 0 16px;
  margin-top: 80px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ImageContainer = styled.div`
  display: flex;
  margin-top: 60px;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 0px;
  }
`
const Image = styled.img`
  height: 260px;
  border-radius: 4px;
`

const TextContainer = styled.div`
  width: 60%;
  padding: 0 0 0 32px;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0;
  }
`

const About = () => {
  return (
    <div id="about">
      <Wrapper>
        <Container>
          <ImageContainer>
            <Image src={aboutImage} alt="" />
          </ImageContainer>
          <TextContainer>
            <Trafalger textStyle="trafalger" mb="30px">
              About me
            </Trafalger>
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
        </Container>
      </Wrapper>
    </div>
  )
}

export default About
