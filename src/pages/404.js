import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import Head from "../components/Head"
import Wrapper from "../components/Wrapper"

const PageNotFound = () => {
  return (
    <Layout>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Head title="Page not found" />
      <Wrapper>
        <h1>Page Not Found</h1>
      </Wrapper>
    </Layout>
  )
}

export default PageNotFound
