import React, { PropTypes } from 'react'
import Button from '../Button'

import FieldEdit from './FieldEdit'
import FieldView from './FieldView'

function Field({ isEditing, open, prefix, ...field }) {
  if (isEditing) {
    return <FieldEdit {...field} prefix={prefix} />
  }
  return <FieldView {...field} onClick={open} prefix={prefix} />
}
Field.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  open: PropTypes.func.isRequired,
  prefix: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
Field.defaultProps = {
}

export default Field
