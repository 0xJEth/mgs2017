import { constant } from 'lodash'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectAuthUser } from 'cape-redux-auth'
import Component from '../Editable/Fields'
import fields from './personFields'

export const PREFIX = 'profile'
// Load the entity we want to edit and the schema defining the fields.
export const getState = createStructuredSelector({
  entity: selectAuthUser,
  fields: constant(fields),
  prefix: constant(PREFIX),
})
export default connect(getState)(Component)
