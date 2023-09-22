import { List, ListItem } from "@mui/material"

type ChatLogProperties = {
  messages: Array<string>
}

const ChatLog = ({ messages }: ChatLogProperties) => {
  return (
    <List>
      {messages.map((m) => (
        <ListItem>{m}</ListItem>
      ))}
    </List>
  )
}

export { ChatLog }
