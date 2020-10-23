import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio'
import About from './components/About'
import { projects } from './assets/projects'

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
                <About />
                <div className="portfolio">
                  <div className="title">
                    <h1><span>>...</span>Portfolio</h1>
                  </div>
                  <div className="projects">
                    <Portfolio projects={projects} />
                  </div>
                </div>
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    )
  }
}