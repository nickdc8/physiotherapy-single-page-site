import React from "react"
import styled from "@emotion/styled"
import { BodyCopy } from "../Typography"
import { color, textStyle, space, typography } from "styled-system"
import theme from "../theme"

const Container = styled.div`
  border-radius: 4px;
  padding: 24px 24px;
  background: ${theme.colors.whiteLinen};
  display: flex;
  flex-direction: column;
  align-content: center;
`

const Image = styled.img`
  margin: 16px 0 16px;
`

const SubHeader = styled.h2`
  ${textStyle}
  ${space}
  ${color}
  ${typography}
`

const Card = ({ iconUrl, content, header }) => {
  return (
    <Container>
      <Image src={iconUrl} alt="" />
      <SubHeader textStyle="subHeader" textAlign="center" mb="12px">
        {header}
      </SubHeader>
      <BodyCopy textStyle="servicesCopy" textAlign="center">
        {content}
      </BodyCopy>
    </Container>
  )
}

export default Card
