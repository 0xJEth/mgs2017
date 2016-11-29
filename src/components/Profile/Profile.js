import { connect } from 'react-redux'
import { selectAuthUser } from 'cape-redux-auth'
import Component from '../Editable/Fields'
import fields from './personFields'

export const PREFIX = 'profile'
// Load the entity we want to edit and the schema defining the fields.
export function getState(state) {
  return {
    entity: selectAuthUser(state),
    fields,
    prefix: PREFIX,
    title: 'Edit Profile',
  }
}

export default connect(getState)(Component)
