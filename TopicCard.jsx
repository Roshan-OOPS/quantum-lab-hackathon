import { Link } from 'react-router-dom'

function TopicCard({ topic }) {
  return (
    <div className="topic-card">
      <h2>{topic.title}</h2>

      <p>{topic.description}</p>

      <Link to={`/topic/${topic.id}`}>
        Explore Topic →
      </Link>
    </div>
  )
}

export default TopicCard