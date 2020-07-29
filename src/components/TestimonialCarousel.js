import React, { Component } from "react"
import "../styles/carousel.css"
import styled from "@emotion/styled"
import { Carousel } from "react-responsive-carousel"
import { Trafalger, BodyCopy } from "../Typography"
import theme from "../theme"

const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 0 15px;
`

const Name = styled(BodyCopy)`
  color: ${theme.colors.sienna};
  font-family: ${theme.fonts.serif};
  margin-bottom: 48px;
`
const TestimonialCarousel = () => {
  return (
    <Carousel infiniteLoop showThumbs={false}>
      <Container>
        <Trafalger textStyle="testimonial" pb="40px">
          Alison is an amazing therapist. I have been going to her for treatment
          to my back for many years, and she has always sorted the problem out.
          I recently had a cruciate ligament operated on my arm. And without her
          help, I would still be in pain. She is very professional but also
          extremely kind. I would highly recommend her.
        </Trafalger>
        <Name>S Webb</Name>
      </Container>
      <Container>
        <Trafalger textStyle="testimonial" pb="40px">
          I have seen Ali over the last four years with various complaints, some
          sport-related, some work-related. During all my consultations and
          treatments whatever the severity of my condition, I have always found
          Ali to be honest and professional. She is extremely knowledgeable and
          experienced and always listens to you. Ali will always go that extra
          mile for her patients and you never feel rushed out of the door.
        </Trafalger>
        <Name>J Jones</Name>
      </Container>
      <Container>
        <Trafalger textStyle="testimonial" pb="24px">
          Following a serious back condition a few years ago, I knew I would be
          left with permanent limitations. Over the last 4 years, Alison has
          provided me with monthly treatments which enable me to retain a normal
          quality of living. She has excellent customer skills, explains clearly
          what is going on and is responsive when I need an appointment. I trust
          her implicitly with her judgment as to how I should be treated
          depending on which bit is playing up at the time. I have no hesitation
          in recommending Alison.
        </Trafalger>
        <Name>B Lewis</Name>
      </Container>
    </Carousel>
  )
}

export default TestimonialCarousel
