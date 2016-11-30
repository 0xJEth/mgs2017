import React, { PropTypes } from 'react'

import FieldGroup from './FieldGroup'
import FieldEdit from './FieldEdit'
import FieldView from './FieldView'

// Using this for a typical horizontal editable field. Mostly a passthrough. Field form container.
function FieldWrapper({ isActive, isEditable, showEdit, showPreview, ...field }) {
  return (
    <FieldGroup {...field} isActive={isActive}>
      {showEdit && <FieldEdit {...field} className="editable-parent" />}
      {showPreview && <FieldView {...field} isActive={isActive} isEditable={isEditable} />}
    </FieldGroup>
  )
}

FieldWrapper.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isEditable: PropTypes.bool.isRequired,
  showEdit: PropTypes.bool.isRequired,
  showPreview: PropTypes.bool.isRequired,
}

FieldWrapper.defaultProps = {
}
export default FieldWrapper
