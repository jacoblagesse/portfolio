import React, { Component } from 'react'
import Project from './Project'
import PropTypes from 'prop-types';

export default class Portfolio extends Component {
  render() {
    return this.props.projects.map((project) => (
      <Project key={project.id} project={project} />
    ))
  }
}

Portfolio.propTypes = {
  projects: PropTypes.array.isRequired
}
