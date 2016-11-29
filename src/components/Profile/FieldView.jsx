import React, { PropTypes } from 'react'
import Button from '../Button'

function FieldView({ name, onClick, initialValue }) {
  return (
    <div>
      <strong>{name}: </strong>
      <span>{initialValue} </span>
      <Button onClick={onClick} icon="edit">Edit</Button>
    </div>
  )
}
FieldView.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  initialValue: PropTypes.string,
}
FieldView.defaultProps = {
}

export default FieldView
