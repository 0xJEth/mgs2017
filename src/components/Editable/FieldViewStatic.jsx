import React, { PropTypes } from 'react'

// The value for simple static (not editable) text fields.

function PreviewTextStatic({ value }) {
  return <span className="editable-fixed-value">{value}</span>
}

PreviewTextStatic.propTypes = {
  value: PropTypes.string.isRequired,
}

export default PreviewTextStatic
