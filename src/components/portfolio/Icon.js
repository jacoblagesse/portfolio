import React, { Component } from 'react'

export default class Icon extends Component {
  render() {

    const { id, image, url } = this.props.icon;

    return (
      <div className='icon'>
        <a href={url}>
          <img src={image}/>
        </a>
      </div>
    )
  }
}
