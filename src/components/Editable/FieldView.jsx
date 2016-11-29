import React, { PropTypes } from 'react'
import classNames from 'classnames'
import { isEmpty } from 'lodash'

import Editable from './FieldViewEditable'
import Static from './FieldViewStatic'

// The preview of a field value. Used for really simple text fields.
function PreviewText({ className, emptyText, isEditable, onClick, value }) {
  const cssClasses = {
    editable: isEditable,
    'editable-empty': isEmpty(value),
  }
  return (
    <div className={classNames('editable-click form-value', cssClasses, className)}>
      { isEditable && <Editable emptyText={emptyText} onClick={onClick} value={value} /> }
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
