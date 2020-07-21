import React from "react"
import styled from "@emotion/styled"
import { BodyCopy } from "../Typography"

const Container = styled.div`
  border-radius: 4px;
  padding: 24px 24px;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  align-content: center;
`

const Image = styled.img`
  margin: 16px 0 24px;
`

const Card = ({ data }) => {
  return (
    <Container>
      <Image src={data.iconUrl} alt="" />
      <BodyCopy textStyle="bodyCopy" textAlign="center">
        {data.content}
      </BodyCopy>
    </Container>
  )
}

export default Card
