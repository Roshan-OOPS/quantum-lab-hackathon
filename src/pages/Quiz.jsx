import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { quizData } from '../data/quizData'

function Quiz() {
  const { topicId } = useParams()
  const navigate = useNavigate()

  const questions = quizData[topicId]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  if (!questions) {
    return (
      <div className="learning-page">
        <h1>Quiz Not Found</h1>
        <p>This quiz does not exist.</p>
      </div>
    )
  }

  const question = questions[currentQuestion]

  const handleAnswer = (index) => {
    // Prevent selecting another answer
    if (selectedAnswer !== null) return

    setSelectedAnswer(index)

    if (index === question.answer) {
      setScore((previousScore) => previousScore + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      setFinished(true)
      return
    }

    setCurrentQuestion((previousQuestion) => previousQuestion + 1)
    setSelectedAnswer(null)
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setFinished(false)
  }

  const getOptionClass = (index) => {
    if (selectedAnswer === null) {
      return 'quiz-option'
    }

    // Correct answer
    if (index === question.answer) {
      return 'quiz-option correct'
    }

    // User selected wrong answer
    if (index === selectedAnswer) {
      return 'quiz-option wrong'
    }

    return 'quiz-option'
  }

  /*
    ============================
    QUIZ RESULT SCREEN
    ============================
  */

  if (finished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    )

    return (
      <div className="learning-page quiz-page">

        <p className="section-label">
          QUIZ COMPLETE
        </p>

        <div className="quiz-result">

          <div className="result-icon">
            ✓
          </div>

          <h1>
            Quiz Completed!
          </h1>

          <p className="result-score">
            {score} / {questions.length}
          </p>

          <p className="result-percentage">
            {percentage}%
          </p>

          <p className="result-message">
            {percentage === 100
              ? 'Perfect score! Excellent work.'
              : percentage >= 80
                ? 'Great job! You have a strong understanding.'
                : percentage >= 60
                  ? 'Good effort! Keep learning and improving.'
                  : 'Keep practicing. You will get better!'}
          </p>

          <div className="result-buttons">

            <button
              className="cycle-button"
              onClick={restartQuiz}
            >
              Retry Quiz
            </button>

            <button
              className="secondary-button"
              onClick={() =>
                navigate(`/topic/${topicId}`)
              }
            >
              Back to Theory
            </button>

          </div>

        </div>

      </div>
    )
  }

  /*
    ============================
    QUIZ QUESTION SCREEN
    ============================
  */

  return (
    <div className="learning-page quiz-page">

      <p className="section-label">
        QUANTUM QUIZ
      </p>

      <h1>
        Test Your Understanding
      </h1>

      {/* Progress */}

      <div className="quiz-progress">

        <div>
          Question {currentQuestion + 1} of {questions.length}
        </div>

        <div className="progress-track">

          <div
            className="progress-fill"
            style={{
              width: `${
                ((currentQuestion + 1) /
                  questions.length) *
                100
              }%`,
            }}
          />

        </div>

      </div>

      {/* Question */}

      <div className="quiz-card">

        <div className="question-number">
          QUESTION{' '}
          {String(currentQuestion + 1).padStart(2, '0')}
        </div>

        <h2>
          {question.question}
        </h2>

        {/* Answer Options */}

        <div className="quiz-options">

          {question.options.map((option, index) => (

            <button
              key={index}
              className={getOptionClass(index)}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
            >

              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>

              <span className="option-text">
                {option}
              </span>

              {/* Correct icon */}

              {selectedAnswer !== null &&
                index === question.answer && (
                  <span className="answer-icon">
                    ✓
                  </span>
                )}

              {/* Wrong icon */}

              {selectedAnswer !== null &&
                index === selectedAnswer &&
                index !== question.answer && (
                  <span className="answer-icon">
                    ✕
                  </span>
                )}

            </button>

          ))}

        </div>

        {/* =================================
            ANSWER FEEDBACK + EXPLANATION
           ================================= */}

        {selectedAnswer !== null && (

          <div
            className={
              selectedAnswer === question.answer
                ? 'answer-feedback correct-feedback'
                : 'answer-feedback wrong-feedback'
            }
          >

            {/* CORRECT */}

            {selectedAnswer === question.answer ? (

              <>
                <div className="feedback-title">
                  <span>✓</span>
                  Correct Answer!
                </div>

                <div className="explanation-box">

                  <h3>
                    Why is this correct?
                  </h3>

                  <p>
                    {question.explanation ||
                      'This is the correct answer according to the quiz.'}
                  </p>

                </div>
              </>

            ) : (

              /* WRONG */

              <>
                <div className="feedback-title">
                  <span>✕</span>
                  Incorrect Answer
                </div>

                <div className="answer-review">

                  <p>
                    <strong>Your answer:</strong>{' '}
                    {question.options[selectedAnswer]}
                  </p>

                  <p>
                    <strong>Correct answer:</strong>{' '}
                    {question.options[question.answer]}
                  </p>

                </div>

                <div className="explanation-box">

                  <h3>
                    Why is the correct answer right?
                  </h3>

                  <p>
                    {question.explanation ||
                      'The correct answer is highlighted above. Review the theory section to understand this concept in more detail.'}
                  </p>

                </div>

              </>

            )}

          </div>

        )}

        {/* Next Button */}

        {selectedAnswer !== null && (

          <button
            className="next-question-button"
            onClick={handleNext}
          >
            {currentQuestion === questions.length - 1
              ? 'Finish Quiz →'
              : 'Next Question →'}
          </button>

        )}

      </div>

    </div>
  )
}

export default Quiz