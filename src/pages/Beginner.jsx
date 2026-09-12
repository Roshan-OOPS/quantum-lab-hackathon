import TopicCard from '../components/TopicCard'
import { topics } from '../data/topics'

function Beginner() {
  return (
    <div className="learning-page">
      <h1>Beginner</h1>

      <p>
        Build your foundation in quantum computing.
      </p>

      <div className="topic-list">
        {topics.beginner.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  )
}

export default Beginner