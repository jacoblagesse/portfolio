import React, { Component } from 'react'

export default class Splash extends Component {
  render() {
    return (
      <div className='splash'>
        <div>
          <h1>Jacob LaGesse</h1>
          <h2>Developer<span> / </span>Designer</h2>
        </div>
        <img src={require('../assets/images/bluemap.png')} />
      </div>
    )
  }
}
