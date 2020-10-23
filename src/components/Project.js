import React, { Component } from 'react'

export default class Project extends Component {
  render() {

    const { id, title, description, image, url } = this.props.project;
    console.log(`${image}`)

    return (
      <div className='project'>
        <img src={image}/>
        <div className="content">
          <h2><span>> </span>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}
