import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Home from './components/templates/Home';
import Quiz from './components/templates/Quiz';
import Highscores from './components/templates/Highscores';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/highscores" component={Highscores} />
      </div>
    </Router>
  );
};

export default App;
