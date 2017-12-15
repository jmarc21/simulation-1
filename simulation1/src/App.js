import React, { Component } from 'react';
import Home from './Home';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShelfA from './components/ShelfA'
import shlfAB1 from './components/ShlfAB1'

class App extends Component {
  render() {
    return (
      //42F
      //42G
      <Switch>                
                              {/* 42H */}
        <Route exact path='/' component={Home}/>
        <Route path='/shelfA' component={ShelfA}/>
        <Route path='/shlfAB1' component={shlfAB1}/>
      </Switch>
    )
  }
}

export default App;
