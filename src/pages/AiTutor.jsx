import { useState, useRef, useEffect } from 'react'

const quickQuestions = [
  'What is a qubit?',
  'Explain superposition',
  'What are quantum gates?',
  'What is entanglement?',
]

const tutorResponses = {
  'What is a qubit?':
    'A qubit is the basic unit of quantum information. Similar to a classical bit, it can represent 0 or 1, but a qubit can also exist in a superposition of both states. This is one of the key ideas that makes quantum computing different from classical computing.',

  'Explain superposition':
    'Superposition means that a quantum system can exist in a combination of multiple possible states at the same time. For a qubit, we often write the state as α|0⟩ + β|1⟩, where α and β are probability amplitudes.',

  'What are quantum gates?':
    'Quantum gates are operations that change the state of qubits. They are similar in concept to logic gates in classical computing. Common quantum gates include X, Y, Z, H, and CNOT.',

  'What is entanglement?':
    'Quantum entanglement is a phenomenon where two or more qubits become correlated in a way that cannot be described independently. Measuring one entangled qubit can give information about the state of another.',
}

function AITutor() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text:
        "Hello! I'm your Quantum AI Tutor. 👋\n\nI can help you understand quantum computing concepts, explain difficult topics, give examples, and test your knowledge.\n\nWhat would you like to learn today?",
    },
  ])

  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef(null)

  /*
    Automatically scroll to the latest message
  */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }, [messages, isTyping])

  /*
    Generate a simple demo response
  */

  const generateResponse = (userMessage) => {
    const normalizedMessage = userMessage.toLowerCase()

    if (
      normalizedMessage.includes('qubit')
    ) {
      return (
        'A qubit is the basic unit of quantum information. Unlike a classical bit, which can only be 0 or 1, a qubit can exist in a superposition of |0⟩ and |1⟩. This allows quantum computers to process quantum states in ways that classical computers cannot.'
      )
    }

    if (
      normalizedMessage.includes('superposition')
    ) {
      return (
        'Superposition is the ability of a quantum system to exist in a combination of possible states. A qubit can be represented as α|0⟩ + β|1⟩. When the qubit is measured, the superposition produces one of the possible measurement outcomes.'
      )
    }

    if (
      normalizedMessage.includes('gate')
    ) {
      return (
        'Quantum gates are operations applied to qubits. They transform quantum states and are used to build quantum circuits. Examples include the X gate, which is similar to a bit flip, the H gate, which creates superposition, and the CNOT gate, which operates on two qubits.'
      )
    }

    if (
      normalizedMessage.includes('entangle')
    ) {
      return (
        'Quantum entanglement occurs when quantum systems become correlated. The state of one qubit can be related to the state of another, even though the individual qubits cannot always be described independently.'
      )
    }

    if (
      normalizedMessage.includes('measurement')
    ) {
      return (
        'Measurement is the process of obtaining information from a quantum state. When a qubit in superposition is measured in the computational basis, the result is typically either |0⟩ or |1⟩, with probabilities determined by the state amplitudes.'
      )
    }

    if (
      normalizedMessage.includes('algorithm')
    ) {
      return (
        'Quantum algorithms are algorithms designed to run on quantum computers. Examples include Grover’s algorithm for searching an unstructured space and Shor’s algorithm for integer factorization.'
      )
    }

    if (
      normalizedMessage.includes('hello') ||
      normalizedMessage.includes('hi')
    ) {
      return (
        'Hello! 👋 I’m ready to help you learn quantum computing. Try asking me about qubits, superposition, quantum gates, entanglement, measurement, or quantum algorithms.'
      )
    }

    return (
      "That's an interesting question! I'm currently a demo version of the Quantum Tutor. Try asking me about a specific quantum concept such as qubits, superposition, quantum gates, entanglement, measurement, or quantum algorithms."
    )
  }

  /*
    Send message
  */

  const sendMessage = (messageText = input) => {
    const trimmedMessage = messageText.trim()

    if (!trimmedMessage || isTyping) {
      return
    }

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: trimmedMessage,
    }

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
    ])

    setInput('')
    setIsTyping(true)

    /*
      Simulate AI thinking
    */

    setTimeout(() => {
      const response = tutorResponses[trimmedMessage] ||
        generateResponse(trimmedMessage)

      const aiMessage = {
        id: Date.now() + 1,
        sender: 'ai',
        text: response,
      }

      setMessages((previousMessages) => [
        ...previousMessages,
        aiMessage,
      ])

      setIsTyping(false)
    }, 900)
  }

  /*
    Handle Enter key
  */

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }

  /*
    Clear conversation
  */

  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'ai',
        text:
          "Conversation cleared. 👋\n\nI'm ready for your next quantum question!",
      },
    ])
  }

  return (
    <div className="ai-tutor-page">

      {/* =====================================
          PAGE HEADER
         ===================================== */}

      <div className="ai-tutor-header">

        <div>
          <p className="section-label">
            QUANTUM AI
          </p>

          <h1>
            Quantum AI Tutor
          </h1>

          <p className="ai-tutor-subtitle">
            Your personal assistant for learning
            quantum computing.
          </p>
        </div>

        <button
          className="clear-chat-button"
          onClick={clearChat}
        >
          ↻ Clear Chat
        </button>

      </div>


      {/* =====================================
          TUTOR LAYOUT
         ===================================== */}

      <div className="ai-tutor-layout">

        {/* ===================================
            SIDEBAR
           =================================== */}

        <aside className="ai-tutor-sidebar">

          <div className="tutor-profile">

            <div className="tutor-avatar">
              ⚛
            </div>

            <div>
              <h3>
                Quantum Tutor
              </h3>

              <div className="tutor-status">
                <span></span>
                Online
              </div>
            </div>

          </div>


          <div className="sidebar-divider"></div>


          <div className="sidebar-section">

            <p className="sidebar-title">
              ASK ABOUT
            </p>

            <button
              onClick={() =>
                sendMessage('What is a qubit?')
              }
            >
              <span>◈</span>
              Qubits
            </button>

            <button
              onClick={() =>
                sendMessage('Explain superposition')
              }
            >
              <span>◉</span>
              Superposition
            </button>

            <button
              onClick={() =>
                sendMessage('What are quantum gates?')
              }
            >
              <span>◇</span>
              Quantum Gates
            </button>

            <button
              onClick={() =>
                sendMessage('What is entanglement?')
              }
            >
              <span>∞</span>
              Entanglement
            </button>

          </div>


          <div className="sidebar-divider"></div>


          <div className="sidebar-help">

            <span className="help-icon">
              ?
            </span>

            <div>
              <strong>
                Need help?
              </strong>

              <p>
                Ask me anything about
                quantum computing.
              </p>
            </div>

          </div>

        </aside>


        {/* ===================================
            CHAT AREA
           =================================== */}

        <main className="ai-chat-container">

          {/* Chat header */}

          <div className="chat-header">

            <div className="chat-ai-icon">
              ⚛
            </div>

            <div>
              <h2>
                Quantum Tutor
              </h2>

              <p>
                Ask questions and learn step by step
              </p>
            </div>

          </div>


          {/* Messages */}

          <div className="chat-messages">

            {messages.map((message) => (

              <div
                key={message.id}
                className={`chat-message ${message.sender}`}
              >

                {message.sender === 'ai' && (
                  <div className="message-avatar">
                    ⚛
                  </div>
                )}

                <div className="message-content">

                  <div className="message-name">
                    {message.sender === 'ai'
                      ? 'Quantum Tutor'
                      : 'You'}
                  </div>

                  <div className="message-bubble">
                    {message.text
                      .split('\n')
                      .map((line, index) => (
                        <p key={index}>
                          {line || '\u00A0'}
                        </p>
                      ))}
                  </div>

                </div>

              </div>

            ))}


            {/* Typing indicator */}

            {isTyping && (

              <div className="chat-message ai">

                <div className="message-avatar">
                  ⚛
                </div>

                <div className="message-content">

                  <div className="message-name">
                    Quantum Tutor
                  </div>

                  <div className="typing-bubble">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                </div>

              </div>

            )}

            <div ref={messagesEndRef} />

          </div>


          {/* =================================
              QUICK QUESTIONS
             ================================= */}

          <div className="quick-questions">

            <p>
              QUICK QUESTIONS
            </p>

            <div className="quick-question-list">

              {quickQuestions.map((question) => (

                <button
                  key={question}
                  onClick={() =>
                    sendMessage(question)
                  }
                  disabled={isTyping}
                >
                  {question}
                </button>

              ))}

            </div>

          </div>


          {/* =================================
              INPUT AREA
             ================================= */}

          <div className="chat-input-area">

            <div className="chat-input-wrapper">

              <textarea
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Ask anything about quantum computing..."
                rows="1"
                disabled={isTyping}
              />

              <button
                className="send-button"
                onClick={() => sendMessage()}
                disabled={
                  !input.trim() || isTyping
                }
                aria-label="Send message"
              >
                ➤
              </button>

            </div>

            <p className="input-hint">
              Press Enter to send · Shift + Enter
              for a new line
            </p>

          </div>

        </main>

      </div>

    </div>
  )
}

export default AITutor