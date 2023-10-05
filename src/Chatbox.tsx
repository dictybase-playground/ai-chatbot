import React, { useState } from "react"
import { Box, TextField, Button, Stack } from "@mui/material"
import { useChat } from "ai/react"
import { ChatLog } from "./ChatLog"

const textFieldId = "input-message"

const Chatbox = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <Box>
      <ChatLog messages={messages} />
      <form onSubmit={handleSubmit}>
        <Stack direction="row" alignItems="stretch">
          <TextField
            id={textFieldId}
            onChange={handleInputChange}
            value={input}
          />
          <Button type="submit"> Send </Button>
        </Stack>
      </form>
    </Box>
  )
}

export { Chatbox }
