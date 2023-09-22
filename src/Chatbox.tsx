import React, { useState } from "react"
import { ChatLog } from "./ChatLog"
import { Box, TextField, Button, Stack } from "@mui/material"

const textFieldId = "input-message"

const Chatbox = () => {
  const [messages, setMessages] = useState<Array<string>>([])
  const [currentMessage, setCurrentMessage] = useState("")

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessages((previousState) => [...previousState, currentMessage])
    setCurrentMessage("")
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.currentTarget.value)
  }

  return (
    <Box>
      <ChatLog messages={messages} />
      <form onSubmit={onSubmit}>
        <Stack direction="row" alignItems="stretch">
          <TextField
            id={textFieldId}
            onChange={onChange}
            value={currentMessage}
          />
          <Button type="submit"> Send </Button>
        </Stack>
      </form>
    </Box>
  )
}

export { Chatbox }
