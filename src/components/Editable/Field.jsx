import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'
import { ary, partial, pick } from 'lodash'

import FieldGroup from './FieldGroup'
import PreviewText from './PreviewText'
import EditField from './EditField'

// Using this for a typical horizontal editable field.
// Think of this as the field form container.
function FieldWrapper(props) {
  const { emptyText, id, isOpen, isSaving, type, onSubmit, open, value } = props
  const handleOpen = ary(partial(open, pick(props, 'id', 'initialValue')))
  const handleSubmit = ary(partial(onSubmit, value))
  return (
    <FieldGroup {...props} onSubmit={handleSubmit}>
      {(isSaving || !isOpen) &&
        <PreviewText
          editable={!isSaving}
          emptyText={emptyText}
          onClick={handleOpen}
          value={value}
        />
      }
      {isOpen && !isSaving &&
        <EditField
          defaultValue={value}
          id={id}
          key={id}
          onSubmit={onSubmit}
          type={type}
        />
      }
    </FieldGroup>
  )
}

FieldWrapper.propTypes = {
  emptyText: PropTypes.string,
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  isSaving: PropTypes.bool,
  onSubmit: PropTypes.func,
  open: PropTypes.func.isRequired,
  type: PropTypes.oneOf([
    'email',
    'dateTime',
    'fullName',
    'select',
    'text',
    'textarea',
  ]).isRequired,
  value: PropTypes.string,
}
FieldWrapper.defaultProps = {
  editable: true,
  type: 'text',
}
export default connectField()(FieldWrapper)
