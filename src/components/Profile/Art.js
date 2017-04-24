import { flow, map } from 'lodash'
import { connect } from 'react-redux'
import { deleteEntity, saveEntity } from 'cape-firebase'
import { selectUser } from 'cape-redux-auth'
import { createHistory } from 'redux-history-sync'
import Component from './ArtGrid'
import fields from './personFields'

export const PREFIX = 'profile'
// Load the entity we want to edit and the schema defining the fields.
export function getStateProps() {
  return {
    fields,
  }
}
export function createItem() {
  return (dispatch, getState) => {
    // Create a new entity in firebase.
    dispatch(saveEntity({ agent: selectUser(getState()), type: 'CreativeWork' }))
    // Tell redux to open the new entity.
    .then(({ id }) => dispatch(createHistory(`/me/${id}`)))
  }
}
export function addAction(action, arg, dispatch) {
  return () => dispatch(action(arg))
}
export function addItemActions(dispatch, activeId) {
  return item => ({
    ...item,
    isActive: activeId === item.id,
    onDelete: addAction(deleteEntity, item, dispatch),
  })
}
export function getActions(dispatch, { activeId, items }) {
  return {
    createItem: flow(createItem, dispatch),
    items: map(items, addItemActions(dispatch, activeId)),
  }
}
export default connect(getStateProps, getActions)(Component)
