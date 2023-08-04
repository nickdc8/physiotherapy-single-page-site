import React from "react"
import Wrapper from "./Wrapper"
import { Trafalger } from "../Typography"
import aboutImage from "../images/about-image.jpeg"
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
  border-radius: 20px;
`

const TextContainer = styled.div`
  max-width: 80%;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 16px;
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
              I am a professional with over 25 years of experience in my field,
              working both within different settings and running my own
              ventures. Having gained diverse experiences throughout my career,
              I am now focused on providing expert services and a personalized
              approach to my clients.
            </BodyCopy>
            <BodyCopy textStyle="bodyCopy">
              With extensive experience in serving a wide range of clients, I
              aim to deliver a top-notch service by effectively communicating
              and collaborating with individuals, families, and relevant
              professionals, ensuring a comprehensive and tailored experience
              for all.
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
