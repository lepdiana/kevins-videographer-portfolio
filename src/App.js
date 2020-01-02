import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js'
import './styles/app.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default App;
