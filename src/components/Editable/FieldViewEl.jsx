import React, { PropTypes } from 'react'
import { isEmpty, pick } from 'lodash'
import classNames from 'classnames'

import Editable from './FieldViewEditable'
import Static from './FieldViewStatic'

// The preview of a field value. Used for really simple text fields.
function PreviewText({ className, emptyText, isEditable, value, ...props }) {
  const cssClasses = {
    editable: isEditable,
    'editable-empty': isEmpty(props.value),
  }
  const editableProps = pick(props, 'id', 'initialValue', 'onClick')
  return (
    <div className={classNames('editable-click form-value', cssClasses, className)}>
      { isEditable && <Editable {...editableProps} emptyText={emptyText} value={value} /> }
      { !isEditable && <Static value={value || emptyText} /> }
    </div>
  )
}
PreviewText.defaultProps = {
  isEditable: true,
}
PreviewText.propTypes = {
  className: PropTypes.string,
  emptyText: PropTypes.string,
  isEditable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
}

export default PreviewText
