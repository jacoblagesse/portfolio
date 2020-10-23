import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
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
            <Header />
            <Splash />
            <Portfolio />
            <About />
          </div>
        </div>
      </Router>
    )
  }
}