import { connect } from 'react-redux'
import { createSelector, createStructuredSelector } from 'reselect'
import { getProp, getSelect } from 'cape-select'
import { studentsFilled } from '../../select/student'
import { artGraph, addStudentArt } from '../../select/art'
import Component from './StudentDetailEl'
import { closePopup } from './back'

export const getStudent = getSelect(
  studentsFilled,
  getProp('params.studentId'),
)
export const getEntity = createSelector(
  artGraph,
  getStudent,
  addStudentArt
)
export const getState = createStructuredSelector({
  student: getEntity,
})
export const actions = {
  closePopup,
}
export default connect(getState, actions)(Component)
