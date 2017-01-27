import React, { PropTypes } from 'react'
import { isEmpty, map } from 'lodash'

function Select({ options, value, ...props }) {
  if (isEmpty(options)) return <div>NO OPTIONS</div>
  return (
    <select {...props} value={value}>
      {map(options, (label, val) =>
        <option key={val} value={value}>{label}</option>
      )}
    </select>
  )
}

Select.propTypes = {
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.string),
}
Select.defaultProps = {
  value: '-',
}
export default Select
