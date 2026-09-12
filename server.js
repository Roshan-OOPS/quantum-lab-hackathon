import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()

const app = express()
const PORT = 3001

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

app.use(cors())
app.use(express.json())

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: 'Message is required.',
      })
    }

    const response = await client.responses.create({
      model: 'gpt-5.6-luna',
      instructions: `
You are Quantum Tutor, an educational AI assistant
for a quantum computing learning platform.

Explain quantum computing concepts clearly for beginners.
Use simple language, examples, and equations when helpful.
If the user asks something unrelated to quantum computing,
politely guide them back toward the topic.
      `,
      input: message,
    })

    res.json({
      reply: response.output_text,
    })
  } catch (error) {
    console.error('AI API error:', error)

    res.status(500).json({
      error: 'Failed to get AI response.',
    })
  }
})

app.listen(PORT, () => {
  console.log(`AI server running at http://localhost:${PORT}`)
})