import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getProp, getSelect } from 'cape-select'
import { studentsFilled } from '../../select/student'
import Component from './StudentDetailEl'
import { closePopup } from './back'

export const getEntity = getSelect(
  studentsFilled,
  getProp('params.studentId'),
)
export const getState = createStructuredSelector({
  student: getEntity,
})
export const actions = {
  closePopup,
}
export default connect(getState, actions)(Component)
