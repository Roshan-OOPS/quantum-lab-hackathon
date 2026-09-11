import { useParams } from 'react-router-dom'
import { topics } from '../data/topics'

function Description() {
  const { topicId } = useParams()

  const allTopics = [
    ...topics.beginner,
    ...topics.intermediate,
    ...topics.advanced,
  ]

  const topic = allTopics.find((item) => item.id === topicId)

  if (!topic) {
    return (
      <div className="learning-page">
        <h1>Topic Not Found</h1>
      </div>
    )
  }

  return (
    <div className="learning-page">
      <p className="section-label">TOPIC DESCRIPTION</p>

      <h1>{topic.title}</h1>

      <p className="topic-intro">
        {topic.description}
      </p>

      <div className="topic-card">
        <h2>Understanding the Concept</h2>

        <p>
          This section will contain the detailed explanation,
          examples and visual learning material for this topic.
        </p>
      </div>
    </div>
  )
}

export default Description