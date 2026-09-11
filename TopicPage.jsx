import { useParams, useNavigate } from 'react-router-dom'
import { topics } from '../data/topics'
import { theoryData } from '../data/theoryData'

function TopicPage() {
  const { topicId } = useParams()
  const navigate = useNavigate()

  const allTopics = [
    ...topics.beginner,
    ...topics.intermediate,
    ...topics.advanced,
  ]

  const topic = allTopics.find((item) => item.id === topicId)
  const theory = theoryData[topicId]

  if (!topic) {
    return (
      <div className="learning-page">
        <h1>Topic Not Found</h1>
        <p>The requested quantum topic does not exist.</p>
      </div>
    )
  }

  const scrollToTheory = () => {
    document.getElementById('theory')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className="learning-page topic-page">

      {/* =========================
          TOPIC HEADER
         ========================= */}

      <p className="section-label">
        QUANTUM LEARNING
      </p>

      <h1>{topic.title}</h1>

      <p className="topic-intro">
        {topic.description}
      </p>


      {/* =========================
          LEARNING CYCLE
         ========================= */}

      <div className="learning-cycle">

        {/* VIDEO */}

        <div className="cycle-card">

          <span>01</span>

          <h2>Video</h2>

          <p>
            Watch an animated explanation of this
            quantum concept.
          </p>

          <a
            href="https://www.youtube.com/watch?v=JhHMJCUmq28"
            target="_blank"
            rel="noopener noreferrer"
            className="cycle-button"
          >
            Watch Video →
          </a>

        </div>


        {/* THEORY */}

        <div className="cycle-card">

          <span>02</span>

          <h2>Theory</h2>

          <p>
            Learn this topic through a structured,
            detailed explanation.
          </p>

          <button
            className="cycle-button"
            onClick={scrollToTheory}
          >
            Read Theory →
          </button>

        </div>


        {/* QUIZ */}

        <div className="cycle-card">

          <span>03</span>

          <h2>Quiz</h2>

          <p>
            Test your understanding of this
            quantum concept.
          </p>

          <button
            className="cycle-button"
            onClick={() => navigate(`/quiz/${topicId}`)}
          >
            Start Quiz →
          </button>

        </div>

      </div>


      {/* =========================
          THEORY
         ========================= */}

      {theory && (
        <section
          className="theory-section"
          id="theory"
        >

          <p className="section-label">
            STRUCTURED THEORY
          </p>

          <h2>
            {topic.title}
          </h2>

          <p className="theory-intro">
            {theory.intro}
          </p>


          {/* THEORY SECTIONS */}

          {theory.sections.map((section, index) => (

            <article
              className="theory-card"
              key={section.title}
            >

              <span className="theory-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>
                {section.title}
              </h3>


              {/* PARAGRAPHS */}

              {section.content?.map((paragraph, paragraphIndex) => (

                <p key={paragraphIndex}>
                  {paragraph}
                </p>

              ))}


              {/* POINTS */}

              {section.points && (

                <ul className="theory-list">

                  {section.points.map((point, pointIndex) => (

                    <li key={pointIndex}>
                      {point}
                    </li>

                  ))}

                </ul>

              )}

            </article>

          ))}

        </section>
      )}

    </div>
  )
}

export default TopicPage