import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.css"
import styled from "@emotion/styled"
import { Carousel } from "react-responsive-carousel"
import { Trafalger } from "../Typography"

const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
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
      </Container>
      <Container>
        <Trafalger textStyle="testimonial" pb="40px">
          I have seen Ali over the last four years with various complaints, some
          sport-related, some work-related. During all my consultations and
          treatments whatever the severity of my condition, I have always found
          Ali to be honest and professional. She is extremely knowledgeable and
          experienced and always listens to you.
        </Trafalger>
      </Container>
      <Container>
        <Trafalger textStyle="testimonial" pb="40px">
          Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit
          non mi porta gravida at eget metus. Donec sed odio dui.
        </Trafalger>
      </Container>
    </Carousel>
  )
}

export default TestimonialCarousel
