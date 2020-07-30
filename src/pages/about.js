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
          content="I am a chartered and state registered physiotherapist with over 25 years of experience working both within the NHS and developing and running my own private practice."
        />
      </Helmet>
      <Head title="About Me" />
      <h1>About</h1>
    </Layout>
  )
}

export default About
