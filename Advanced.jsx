import TopicCard from '../components/TopicCard'
import { topics } from '../data/topics'

function Advanced() {
  return (
    <div className="learning-page">
      <h1>Advanced</h1>

      <p>
        Explore algorithms, QKD, QML and real-world applications.
      </p>

      <div className="topic-list">
        {topics.advanced.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  )
}

export default Advanced