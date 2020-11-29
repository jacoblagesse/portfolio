import React, { Component } from 'react'
import Icons from './portfolio/Icons'
import { logos } from '../assets/logos'

export default class Splash extends Component {
  render() {
    return (
      <div className='splash'>
        <div className='text'>
          <h1>Jacob LaGesse</h1>
          <h2>Developer<span> / </span>Designer</h2>
          <div className='logo-container'>
            <Icons icons={logos} />
          </div>
        </div>
        <img className='background' src={require('../assets/images/bluemap.png')} />
      </div>
    )
  }
}
