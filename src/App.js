import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
