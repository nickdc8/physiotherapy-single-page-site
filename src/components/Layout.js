import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import styled from "@emotion/styled"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/react"
import { ThemeProvider } from "@emotion/react"
import theme from "../theme"

import "../styles/styles.css"
import "../styles/reset.css"

const Content = styled.div`
  flex-grow: 1;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          div {
            background: ${theme.colors.floralWhite};
          }
        `}
      />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container>
        {/* <NavBar /> */}
        {/* <Content>{children}</Content> */}
        {/* <Footer /> */}
      </Container>
    </ThemeProvider>
  )
}

export default Layout
