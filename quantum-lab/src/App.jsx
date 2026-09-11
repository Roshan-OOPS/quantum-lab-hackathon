import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Beginner from './pages/Beginner'
import Intermediate from './pages/Intermediate'
import Advanced from './pages/Advanced'
import TopicPage from './pages/TopicPage'
import Playground from './pages/Playground'
import Quiz from './pages/Quiz'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/learn" element={<Learn />} />

        <Route path="/beginner" element={<Beginner />} />

        <Route path="/intermediate" element={<Intermediate />} />

        <Route path="/advanced" element={<Advanced />} />

        <Route path="/topic/:topicId" element={<TopicPage />} />

        <Route path="/playground/:topicId" element={<Playground />} />

        <Route path="/quiz/:topicId" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App