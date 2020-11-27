import React, { Component } from 'react'

export default class Project extends Component {
  render() {

    const { id, title, description, media, url, url2, url3, vid } = this.props.project;

    let mediaDisplay;
    if (vid) {
      mediaDisplay = (<video loop autoPlay muted>
                <source src={media} type='video/mp4'/>
              </video>)
    } else {
      mediaDisplay = <img src={media}/>
    }

    let buttons = (<div className='buttons'>
                    { url && <a href={url} target='_blank' rel='noopener noreferrer'>Visit</a> }
                    { url2 && <a href={url2} target='_blank' rel='noopener noreferrer'>Learn more</a> }
                    { url3 && <a href={url3} target='_blank' rel='noopener noreferrer'>Additional code</a> }
                  </div>)

    return (
      <div className='project'>
        {mediaDisplay}
        <div className='overlay'>
          <div className='content'>
            <h2>{title}</h2>
            <p>{description}</p>
            {buttons}
          </div>
        </div>
      </div>
    )
  }
}
