import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      {/* Hero Section */}
      <section className="home">
        <div className="hero-content">
          <p className="hero-label">AI-POWERED QUANTUM LEARNING</p>

          <h1>
            Master Quantum Computing Through
            <span> Hands-On Challenges</span> & AI Feedback
          </h1>

          <p className="hero-description">
            Experience the complete quantum learning cycle: explore visual
            simulations, write
            <br />
            quantum circuits, solve interactive missions and validate your
            conceptual understanding
            <br />
            with automated AI evaluations.
          </p>

          <div className="hero-buttons">
            <button
              className="cycle-button"
              onClick={() => {
                document.getElementById('topics')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }}
            >
              ▣ Explore 4-Step Cycle
            </button>
          </div>
        </div>
      </section>

      {/* Learning Topics */}
      <section className="topics-section" id="topics">
        <p className="section-label">EXPLORE QUANTUM</p>

        <h2>Learning Topics</h2>

        <p className="section-description">
          Choose your level and explore the quantum concepts you will learn.
        </p>

        <div className="level-cards">

          {/* BEGINNER */}
          <div className="level-card">
            <span className="level-number">01</span>

            <h3>Beginner</h3>

            <ul className="subtopic-list">
              <li>What is Quantum Computing?</li>
              <li>Classical Bit</li>
              <li>Qubit</li>
              <li>Superposition</li>
              <li>Measurement</li>
              <li>Quantum Probability</li>
            </ul>

            <button
              onClick={() => navigate('/beginner')}
              className="level-button"
            >
              Explore Beginner →
            </button>
          </div>

          {/* INTERMEDIATE */}
          <div className="level-card">
            <span className="level-number">02</span>

            <h3>Intermediate</h3>

            <ul className="subtopic-list">
              <li>Quantum Gates</li>
              <li>Quantum Circuits</li>
              <li>Multi-Qubit Systems</li>
              <li>Entanglement</li>
              <li>Phase</li>
              <li>Interference</li>
            </ul>

            <button
              onClick={() => navigate('/intermediate')}
              className="level-button"
            >
              Explore Intermediate →
            </button>
          </div>

          {/* ADVANCED */}
          <div className="level-card">
            <span className="level-number">03</span>

            <h3>Advanced</h3>

            <ul className="subtopic-list">
              <li>Quantum Algorithms</li>
              <li>Quantum Cryptography</li>
              <li>Quantum Key Distribution</li>
              <li>Quantum Machine Learning</li>
              <li>Quantum Applications</li>
              <li>Real-World Use Cases</li>
            </ul>

            <button
              onClick={() => navigate('/advanced')}
              className="level-button"
            >
              Explore Advanced →
            </button>
          </div>

        </div>
      </section>
    </>
  )
}

export default Home