import React from 'react'
import PropTypes from 'prop-types'

export const Greeter = (props) => {
  const { name } = props

  return (
    <h1>
      Hello {name}!
    </h1>
  )
}

Greeter.propTypes = {
  name: PropTypes.string.isRequired
}

export default Greeter
