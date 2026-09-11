import { Link } from 'react-router-dom'

function Learn() {
  return (
    <div className="learning-page">
      <h1>Learning Topics</h1>

      <p>
        Choose your level and start exploring quantum computing.
      </p>

      <div className="level-cards">
        <div className="level-card">
          <span className="level-number">01</span>
          <h2>Beginner</h2>
          <p>Build your foundation in quantum computing.</p>
          <Link to="/beginner">Explore Beginner →</Link>
        </div>

        <div className="level-card">
          <span className="level-number">02</span>
          <h2>Intermediate</h2>
          <p>Explore gates, circuits and entanglement.</p>
          <Link to="/intermediate">Explore Intermediate →</Link>
        </div>

        <div className="level-card">
          <span className="level-number">03</span>
          <h2>Advanced</h2>
          <p>Discover algorithms, QKD, QML and applications.</p>
          <Link to="/advanced">Explore Advanced →</Link>
        </div>
      </div>
    </div>
  )
}

export default Learn