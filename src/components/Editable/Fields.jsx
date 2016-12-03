import React, { PropTypes } from 'react'
import { map } from 'lodash'
import css from '../../style'
import Field from './Field'

function Fields({ entity, fields, prefix, title }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <ul style={css('lsNone m0 p0')}>
        {map(fields, field => (
          <li key={field.id}>
            <Field
              {...field}
              initialValue={entity[field.id]}
              prefix={prefix}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

Fields.propTypes = {
  entity: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  prefix: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
Fields.defaultProps = {
  title: 'Edit Entity',
}
export default Fields
