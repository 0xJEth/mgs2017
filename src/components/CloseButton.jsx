import React, { PropTypes } from 'react'
import ButtonEl from './Button'

function CloseButton(props) {
  return <ButtonEl className="close btn-small z4" icon="times-btl" {...props} />
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default CloseButton
