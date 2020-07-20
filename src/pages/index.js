import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import Head from "../components/Head"
import { ThemeProvider } from "emotion-theming"
import theme from "../theme"
import Hero from "../components/Hero"

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Helmet>
          <meta
            name="description"
            content="Curabitur blandit tempus porttitor."
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Head title="Home" />
        <Hero />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
