import React, { PropTypes } from 'react'
import ButtonEl from './Button'

function CloseButton(props) {
  return <ButtonEl className="close" icon="close-circle-outline" styles="bn p0 bgTrans fs2 absolute" {...props} />
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default CloseButton
