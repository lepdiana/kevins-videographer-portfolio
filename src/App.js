import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Videography from './components/Videography.js';
import Contact from './components/Contact.js';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/videography' component={Videography}/>
        <Route patch='/contact' component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
