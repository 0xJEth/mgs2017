import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getProp, getSelect } from 'cape-select'
import { studentsFilled } from '../../select/student'
import Component from './StudentDetailEl'

export const getEntity = getSelect(
  studentsFilled,
  getProp('params.studentId'),
)
export const getState = createStructuredSelector({
  student: getEntity,
})

export default connect(getState)(Component)
