import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'
import { ary, partial, pick } from 'lodash'

import FieldGroup from './FieldGroup'
import PreviewText from './PreviewText'
import EditField from './EditField'

// Using this for a typical horizontal editable field.
// Think of this as the field form container.
function FieldWrapper(props) {
  const { editable, emptyText, id, type, onSubmit, value } = props
  const preventClose = !saving && props.open
  const open = preventClose || form.open
  const handleOpen = ary(partial(open, pick(props, 'id', 'initialValue')))
  return (
    <FieldGroup {...props}>
      {!open &&
        <PreviewText
          editable={!saving && editable}
          emptyText={emptyText}
          onClick={handleOpen}
          value={form.value || value}
        />
      }
      {open &&
        <EditField
          fieldEvent={fieldEvent}
          formEvent={formEvent}
          defaultValue={value}
          form={form}
          id={id}
          key={id}
          onSubmit={onSubmit}
          preventClose={preventClose}
          type={type}
        />
      }
    </FieldGroup>
  )
}

FieldWrapper.propTypes = {
  editable: PropTypes.bool.isRequired,
  emptyText: PropTypes.string,
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  open: PropTypes.bool,
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
