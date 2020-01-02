import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1>Trivia</h1>
      <a href="/quiz" className="btn">
        Start Quiz
      </a>
      <a href="/highscores" className="btn">
        High Scores
      </a>
    </div>
  )
}

export default Home
