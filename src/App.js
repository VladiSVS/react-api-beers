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
import RandomBeer from './components/RandomBeer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => response.json())
      .then(json => this.setState({ data: json }, () => {
        console.log("Data is Raedy")
        this.setState({ dataIsReady: true })
      }))
  }

  render() {
    return (
      <Router>
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/randomBeer/" >
            <RandomBeer propsData={this.state.data} propsReady={this.state.dataIsReady} />
          </Route>

          <Route path="/beers" exact>
            <BeersItemsList propsData={this.state.data} propsReady={this.state.dataIsReady} />
          </Route>

          <Route path='/beers/:id' render={(props) => <BeerItemList {...props} propsData={this.state.data} propsReady={this.state.dataIsReady} />}>
          </Route>

        </Switch >
      </Router >
    );
  }
}

export default App;