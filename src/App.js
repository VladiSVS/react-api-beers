import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import BeerItemList from './components/BeerItemList';
import BeersItemsList from './components/BeersItemsList';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/beers" exact>
            <BeersItemsList />
          </Route>

          <Route path='/beers/:id' component={BeerItemList}>
          </Route>

        </Switch>
      </Router>
    );
  }
}

export default App;