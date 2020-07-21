import React from "react"
import Wrapper from "./Wrapper"
import { Trafalger } from "../Typography"
import aboutImage from "../images/alison-about.jpg"
import styled from "@emotion/styled"
import { BodyCopy } from "../Typography"

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.74fr 1fr;
`

const Image = styled.img`
  width: 290px;
  height: auto;
`

const TextContainer = styled.div`
  width: 60%;
`

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Image src={aboutImage} alt="" />
        <TextContainer>
          <Trafalger textStyle="trafalger" mt="80px" mb="30px">
            About me
          </Trafalger>
          <BodyCopy textStyle="bodyCopy">
            Alison Stuart is a Chartered Physiotherapist with over 25 years of
            experience. She has a wealth of experience and has previously worked
            for the NHS both in adult and paediatric care, at Stoke Mandeville
            hospital in their specialist spinal injuries unit as well as other
            private practices and professional sports teams.
          </BodyCopy>
          <BodyCopy textStyle="bodyCopy">
            Her most diverse experience was a time working for a professional
            basketball team. "I worked for five years with the Chester Jets. We
            travelled all over Europe, and I have to say it was great fun and an
            amazing experience for me."
          </BodyCopy>
        </TextContainer>
      </Container>
    </Wrapper>
  )
}

export default About
