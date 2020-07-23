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
              I am a chartered and state registered physiotherapist with over 25
              years of experience, working both within the NHS, running my
              private practice and working as an expert disability qualified
              member within the tribunal setting within court. My wealth of
              experience has taken me in this direction lead me to sell my
              business and allow me the time to dedicate to my expert legal work
              and concentrate on a more bespoke individual client-based service.
            </BodyCopy>
            <BodyCopy textStyle="bodyCopy">
              Following many years of working in the public and private sector
              providing expert physiotherapy within Cheshire and North Wales, I
              am aware of the high standards that must always be met. Taking
              care of the minor details, communicating and liaising with
              clients, family and medical professionals provide a service that
              is all-encompassing.
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
