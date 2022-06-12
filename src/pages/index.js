import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import Head from "../components/Head"
import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import Contact from "../components/Contact"
import Testimonials from "../components/Testimonials"
import Accreditations from "../components/Accreditations"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="google-site-verification"
          content="apaIIhfXPOxdvp2oq_BoKuAAxXDGxOPhePehC-lbikU"
        />
        <meta
          name="description"
          content="I am a chartered and state registered physiotherapist with over 25
              years of experience working both within the NHS and developing and
              running my own private practice in the Cheshire, Mold and North Wales area."
        />
      </Helmet>
      <Head title="Home" />
      {/* <Hero />
      <Services />
      <About />
      <Contact />
      <Testimonials />
      <Accreditations /> */}
    </Layout>
  )
}

export default IndexPage
