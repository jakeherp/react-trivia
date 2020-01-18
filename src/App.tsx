import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Home from './components/templates/Home';
import Quiz from './components/templates/Quiz';
import Highscores from './components/templates/Highscores';
import Settings from './components/templates/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/highscores" component={Highscores} />
        <Route path="/settings" component={Settings} />
      </div>
    </Router>
  );
};

export default App;
