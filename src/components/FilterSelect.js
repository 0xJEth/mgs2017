import { connect } from 'react-redux'
import { get, omit, overArgs, partial } from 'lodash'
import { mapDispatchToProps } from 'cape-redux'
import { select, structuredSelector } from 'cape-select'
import { onChange, selectForm } from 'redux-field'
import Component from 'cape-mixer/lib/SelectEl'

export function getPrefix({ collectionId = 'default', fieldId = 'field' }) {
  return [collectionId, fieldId]
}
export const getState = overArgs(get, [selectForm, getPrefix])
export const getValue = select(getState, 'value', '')

export const mapStateToProps = structuredSelector({
  value: getValue,
})

function getActions(props) {
  return {
    onChange: partial(onChange, getPrefix(props)),
  }
}
export function mergeProps(stateProps, dispatchProps, ownProps) {
  const props = omit(ownProps, 'collectionId', 'fieldId')
  return Object.assign(
    props, stateProps, dispatchProps
  )
}
export default connect(mapStateToProps, mapDispatchToProps(getActions), mergeProps)(Component)
