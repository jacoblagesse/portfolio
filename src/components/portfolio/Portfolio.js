import React, { Component } from 'react'
import Projects from './Projects'
import { projects } from '../../assets/projects'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio" id="portfolio">
        <div className="title">
          <h1><span>>...</span>Portfolio</h1>
        </div>
        <div className="projects">
          <Projects projects={projects} />
        </div>
      </div>
    )
  }
}
