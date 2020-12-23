import React, { Component } from 'react'
import Projects from './Projects'
import { projects } from '../../assets/projects'
import Icons from './Icons'
import { icons } from '../../assets/icons'

export default class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio' id='portfolio'>
        <div className='title'>
          <div className='icon-container'>
            <Icons icons={icons} />
          </div>
          <h1>Portfolio</h1>
          <p>Full-stack development, data analysis and visualization</p>
        </div>
        <div className='projects'>
          <Projects projects={projects} />
        </div>
      </div>
    )
  }
}
