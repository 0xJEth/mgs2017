import React, { PropTypes } from 'react'
import classNames from 'classnames'

import Editable from './PreviewTextEditable'
import Static from './PreviewTextStatic'

// The preview of a field value. Used for really simple text fields.
function PreviewText({ className, editable, isEmpty, onClick, value }) {
  const cssClasses = {
    'editable-empty': isEmpty,
  }
  return (
    <div className={classNames('editable-click form-value', cssClasses, className)}>
      { editable && <Editable onClick={onClick} value={value} /> }
      { !editable && <Static value={value} /> }
    </div>
  )
}

PreviewText.defaultProps = {
  editable: true,
}
PreviewText.propTypes = {
  className: PropTypes.string,
  editable: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
}

export default PreviewText
