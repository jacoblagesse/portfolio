import React, { Component } from 'react'
import Projects from './portfolio/Projects'

export default class About extends Component {
  render() {
    return (
      <div className='about' id='about'>
        <div className='container'>
          <img src={require('../assets/images/fishing.jpg')} alt='Fishing background'/>
          <div className='content'>
            <h1><span>> </span>I'm studying computer science and datajournalism at Mizzou</h1>
          </div>
        </div>
      </div>
    )
  }
}
