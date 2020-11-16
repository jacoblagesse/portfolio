import React, { Component } from 'react'
import Icon from './Icon'
import PropTypes from 'prop-types'

export default class Icons extends Component {
  render() {
    return this.props.icons.map((icon) => (
      <Icon key={icon.id} icon={icon} />
    ))
  }
}

Icons.propTypes = {
  icons: PropTypes.array.isRequired
}
