import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import Head from "../components/Head"
import Hero from "../components/Hero"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Curabitur blandit tempus porttitor."
        />
      </Helmet>
      <Head title="Home" />
      <Hero />
    </Layout>
  )
}

export default IndexPage
