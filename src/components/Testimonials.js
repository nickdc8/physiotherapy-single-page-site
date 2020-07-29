import React from "react"
import Wrapper from "./Wrapper"
import TestimonialCarousel from "./TestimonialCarousel"
import { Trafalger } from "../Typography"
import Line from "../components/Line"

const Testimonials = () => {
  return (
    <div id="testimonials">
      <Wrapper>
        <Trafalger textStyle="trafalger" textAlign="center" mb="24px">
          Testimonials
        </Trafalger>
        <Line align="0 auto 60px" />
        <TestimonialCarousel />
      </Wrapper>
    </div>
  )
}

export default Testimonials
