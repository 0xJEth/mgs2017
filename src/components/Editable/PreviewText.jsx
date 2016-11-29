import React, { PropTypes } from 'react'
import classNames from 'classnames'

import Editable from './PreviewTextEditable'
import Static from './PreviewTextStatic'

// The preview of a field value. Used for really simple text fields.
function PreviewText({ className, isEditable, isEmpty, onClick, value }) {
  const cssClasses = {
    editable: isEditable,
    'editable-empty': isEmpty,
  }
  return (
    <div className={classNames('editable-click form-value', cssClasses, className)}>
      { isEditable && <Editable onClick={onClick} value={value} /> }
      { !isEditable && <Static value={value} /> }
    </div>
  )
}
PreviewText.defaultProps = {
  isEditable: true,
}
PreviewText.propTypes = {
  className: PropTypes.string,
  isEditable: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
}

export default PreviewText
