import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import Head from "../components/Head"

const About = () => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="I am a registered member of the British Association of
          Counselling & Psychotherapy, having studied and qualified at the
          Psychosynthesis Trust in London Bridge."
        />
      </Helmet>
      <Head title="About Me" />
      <h1>About</h1>
    </Layout>
  )
}

export default About
