import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import Head from "../components/Head"

const PageNotFound = () => {
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
      <Head title="Page not found" />
      <h1>Page Not Found</h1>
    </Layout>
  )
}

export default PageNotFound
