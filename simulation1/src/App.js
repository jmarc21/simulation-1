import React, { Component } from 'react';
import Home from './Home';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShelfA from './components/ShelfA'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/shelfA' component={ShelfA}/>
      </Switch>
    )
  }
}

export default App;
