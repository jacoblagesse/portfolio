import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className='about' id='about'>
        <div className='container'>
          <img src={require('../assets/images/fishing.jpg')} alt='Fishing background'/>
          <h1><span>> </span>I'm a computer science and datajournalism student at Mizzou</h1>
          <div className='content'>
            <div className='box'>
            </div>
            <div className='box'>
            </div>
            <div className='box'>
            </div>
            <div className='bottom-box'>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
