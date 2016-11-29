import React, { PropTypes } from 'react'
import { ary, partial, pick } from 'lodash'

import FieldEdit from './FieldEdit'
import FieldView from './FieldView'

function Field({ isEditing, open, prefix, ...field }) {
  if (isEditing) {
    return <FieldEdit {...field} prefix={prefix} />
  }
  const handleOpen = ary(partial(open, pick(field, 'id', 'initialValue')))
  return <FieldView {...field} onClick={handleOpen} prefix={prefix} />
}
Field.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  open: PropTypes.func.isRequired,
  prefix: PropTypes.string.isRequired,
}
Field.defaultProps = {
}

export default Field
