import React from "react"
import Wrapper from "./Wrapper"
import { Trafalger } from "../Typography"
import aboutImage from "../images/alison-about.png"
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
              I am a chartered and state registered physiotherapist with over 25
              years of experience working both within in NHS and developing and
              running my own private practice. Having sold my business last
              year, I can now dedicate my time to expert legal work and
              providing a more bespoke individual client based service to my
              patients.
            </BodyCopy>
            <BodyCopy textStyle="bodyCopy">
              With extensive experience of running my private practice treating
              clients from Cheshire and North Wales I provide a first class
              service communicating and liaising with client, family and medical
              professionals to provide a service that is all encompassing.
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
