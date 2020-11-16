import React, { Component } from 'react'

export default class Project extends Component {
  render() {

    const { id, title, description, image, url } = this.props.project;

    return (
      <div className='project'>
        <img src={image}/>
        <div className='overlay'>
          <div className='content'>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={url}>Learn more</a>
          </div>
        </div>
      </div>
    )
  }
}
