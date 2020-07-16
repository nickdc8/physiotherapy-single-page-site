import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import Head from "../components/Head"

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
      <div>content</div>
    </Layout>
  )
}

export default IndexPage
