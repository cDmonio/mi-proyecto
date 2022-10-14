import React, { Component } from "react";
import PropTypes from 'prop-types'

class Carga extends Component {
  render() {
    return(
        <ul>
          <li>Carga rápida en estación de repostaje: {this.props.carga}</li>
        </ul>
    )
  }
}

Carga.propTypes = {
  carga: PropTypes.string.isRequired
}

export default Carga;