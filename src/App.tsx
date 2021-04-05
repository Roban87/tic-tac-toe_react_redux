import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Game from './pages/Game';
import ScoreBoard from './pages/ScoreBoard';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/scores" component={ScoreBoard} />
      </Switch>
    </Router>
  );
};

export default App;
