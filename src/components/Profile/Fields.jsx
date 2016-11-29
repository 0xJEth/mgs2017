import React, { PropTypes } from 'react'
import { map } from 'lodash'
import Field from './Field'

function Fields({ editing, entity, fields, open, prefix, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul className="ls-none m0 p0">
        {map(fields, field => (
          <li key={field.id}>
            <Field
              {...field}
              initialValue={entity[field.id]}
              isEditing={editing === field.id}
              open={open}
              prefix={prefix}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

Fields.propTypes = {
  editing: PropTypes.string,
  entity: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  open: PropTypes.func.isRequired,
  prefix: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
Fields.defaultProps = {
  title: 'Edit Profile',
}
export default Fields
