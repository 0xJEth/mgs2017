import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import css from 'cape-style'
import Field from 'cape-mixer/lib/Editable/Field'

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
