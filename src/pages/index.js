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
        <meta name="description" content="" />
      </Helmet>
      <Head title="Home" />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Testimonials />
      <Accreditations />
    </Layout>
  )
}

export default IndexPage
