// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChatRoom from './components/ChatRoom';
import KanbanBoard from './components/KanbanBoard';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/chat" component={ChatRoom} />
          <Route path="/kanban" component={KanbanBoard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
