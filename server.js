import "dotenv/config"
import OpenAI from "openai"
import { OpenAIStream, StreamingTextResponse } from "ai"
import express from "express"
import ViteExpress from "vite-express"
import bodyParser from "body-parser"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const app = express()

app.use(bodyParser.text())

app.post("/api/chat", async (request, response, next) => {
  const { messages } = JSON.parse(request.body)
  console.log(messages)
  try {
    const aiResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages,
    })

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(aiResponse)
    // const text = new StreamingTextResponse(stream)
    for await (const chunk of stream) {
      console.log(chunk)
      response.write(chunk)
    }
    // Respond with the stream
    response.end()
  } catch (error) {
    next(error)
  }
})

app.use((error, request, response, next) => {
  console.error(error.stack)
  response.status(500).send('Something broke!')
})
const server = app.listen(3005, "0.0.0.0", () =>
  console.log("Server is listening..."),
)

ViteExpress.bind(app, server)
