import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.css"
import styled from "@emotion/styled"
import { Carousel } from "react-responsive-carousel"
import { Trafalger } from "../Typography"

const Container = styled.div`
  margin: 0 80px;
`
const TestimonialCarousel = () => {
  return (
    <Carousel infiniteLoop>
      <Container>
        <Trafalger textStyle="testimonial" pb="40px">
          Donec sed odio dui. Curabitur blandit tempus porttitor. Etiam porta
          sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
          vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas
          eget quam. Nulla vitae elit libero, a pharetra augue. Nullam quis
          risus eget urna mollis ornare vel eu leo.
        </Trafalger>
      </Container>
      <Container>
        <Trafalger textStyle="testimonial" pb="40px">
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
          bibendum nulla sed consectetur.
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
