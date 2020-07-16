import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import styled from "@emotion/styled"
import Helmet from "react-helmet"

import "../styles/styles.css"
import "../styles/reset.css"

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 16px;
`

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
    <Wrapper>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
      </Helmet>
      <Container>
        <NavBar />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </Wrapper>
  )
}

export default Layout
