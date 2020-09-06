import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import Head from "../components/Head"
import Wrapper from "../components/Wrapper"
import styled from "@emotion/styled"
import theme from "../theme"
import { Link } from "gatsby"

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  place-items: center;
  height: 400px;
`
const Header = styled.h1`
  font-family: ${theme.fonts.sansSerif};
  color: ${theme.colors.dolphin};
  font-size: 24px;
  margin: 16px 0 16px;
`

const PageNotFound = () => {
  return (
    <Layout>
      <Helmet>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Head title="Page not found" />
      <Wrapper>
        <Container>
          <span role="img" aria-label="sad face" style={{ fontSize: "64px" }}>
            ☹️
          </span>
          <Header>Page Not Found</Header>
          <Link to="/">Go back home</Link>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default PageNotFound
