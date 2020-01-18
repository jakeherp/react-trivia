import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <h1>Trivia</h1>
      <Link to="/quiz" className="btn">
        Start Quiz
      </Link>
      <Link to="/highscores" className="btn">
        High Scores
      </Link>
      <Link to="/settings" className="btn">
        Settings
      </Link>
    </>
  );
};

export default Home;
