import React, { PropTypes } from 'react'
import ButtonEl from './Button'

function CloseButton(props) {
  return <ButtonEl className="close wtf" icon="close-circle-outline" style="bn p0 bgTrans fs2" {...props} />
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default CloseButton
