import React, { Component } from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Calculator from './components/calculator';
import Quote from './components/Quote';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="*">
            <Home to="/" />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
