import React, { useState } from "react"
import axios from "axios"
import styled from "@emotion/styled"
import theme from "../theme"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`

const Label = styled.label`
  margin-bottom: 6px;
  font-family: ${theme.fonts.sansSerif};
  color: ${theme.colors.charcoal};
  font-size: 14px;
`

const Input = styled.input`
  font-family: ${theme.fonts.serif};
  background: #fdfdfd;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 24px;
`

const TextArea = styled.textarea`
  background: #fdfdfd;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 24px;
  height: 189px;
  resize: vertical;
`

const Button = styled.button`
  background: #a76635;
  display: inline-block;
  color: white;
  padding: 10px 16px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.5px;
  transition: 0.3s;
  border: none;
  cursor: pointer;
  :hover {
    background: ${theme.colors.sienna};
  }
`

const Confirmation = styled.p`
  background: #d6e0eb;
  border: 1px solid #bbd0e8;
  padding: 8px;
  color: #2c4c6e;
  border-radius: 4px;
  margin-top: 16px;
  text-align: center;
`

const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://formspree.io/xgenryel",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks! Your form has been submitted", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input type="text" name="name" id="name" required />
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" name="email" required />
      <Label htmlFor="message">Message</Label>
      <TextArea id="message" name="message"></TextArea>
      <Button type="submit" disabled={serverState.submitting}>
        Submit
      </Button>
      {serverState.status && (
        <Confirmation className={!serverState.status.ok ? "errorMsg" : ""}>
          {serverState.status.msg}
        </Confirmation>
      )}
    </Form>
  )
}

export default ContactForm
