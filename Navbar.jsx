import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-area">
        <div className="logo-icon">⚛</div>

        <div className="logo-text">
          <h2>
            QUANTUM <span>LAB</span>
          </h2>
          <p>LEARN • EXPLORE • BUILD • GROW</p>
        </div>
      </div>

      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/playground">Playground</Link>
        <Link to="/ai-tutor">AI Tutor</Link>
      </div>

      <div className="nav-buttons">
        <button className="quick-demo">
          ▷ Quick Demo
        </button>

        <button className="start-button">
          ★ Start Challenge
        </button>
      </div>
    </nav>
  )
}

export default Navbar