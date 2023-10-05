import { List, ListItem } from "@mui/material"
import { Message } from "ai/react"

type ChatLogProperties = {
  messages: Array<Message>
}

const ChatLog = ({ messages }: ChatLogProperties) => {
  return (
    <List>
      {messages.map(({ content }) => (
        <ListItem>{content}</ListItem>
      ))}
    </List>
  )
}

export { ChatLog }
