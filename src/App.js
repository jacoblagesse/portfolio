import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Splash from './components/Splash'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/About'

import './App.scss'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" />
            <Route path="/portfolio" render={props => (
              <React.Fragment>
                <Splash />
                <Portfolio />
                <About />
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    )
  }
}