import React, { PropTypes } from 'react'

import FieldGroup from './FieldGroup'
import PreviewText from './PreviewText'
import EditField from './EditField'

// Using this for a typical horizontal editable field. Mostly a passthrough. Field form container.
function FieldWrapper({ isEditable, showEdit, showPreview, ...field }) {
  return (
    <FieldGroup {...field}>
      {showPreview && <PreviewText {...field} isEditable={isEditable} />}
      {showEdit && <EditField {...field} />}
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
