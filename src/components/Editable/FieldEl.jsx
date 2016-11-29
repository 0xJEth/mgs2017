import React, { PropTypes } from 'react'

import FieldGroup from './FieldGroup'
import FieldEdit from './FieldEdit'
import FieldView from './FieldView'

// Using this for a typical horizontal editable field. Mostly a passthrough. Field form container.
function FieldWrapper({ isEditable, showEdit, showPreview, ...field }) {
  return (
    <FieldGroup {...field}>
      {showEdit && <FieldEdit {...field} />}
      {showPreview && <FieldView {...field} isEditable={isEditable} />}
    </FieldGroup>
  )
}

FieldWrapper.propTypes = {
  isEditable: PropTypes.bool.isRequired,
  showEdit: PropTypes.bool.isRequired,
  showPreview: PropTypes.bool.isRequired,
}

FieldWrapper.defaultProps = {
}
export default FieldWrapper
