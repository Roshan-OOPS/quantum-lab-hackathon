import TopicCard from '../components/TopicCard'
import { topics } from '../data/topics'

function Intermediate() {
  return (
    <div className="learning-page">
      <h1>Intermediate</h1>

      <p>
        Explore quantum gates, circuits, entanglement and interference.
      </p>

      <div className="topic-list">
        {topics.intermediate.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  )
}

export default Intermediate