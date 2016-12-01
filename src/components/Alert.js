import { connect } from 'react-redux'
import { flow } from 'lodash'
import { pick } from 'lodash/fp'
import { createStructuredSelector } from 'reselect'
import { selectStyleColor } from '../select/style'
import Component from './AlertEl'

const getState = createStructuredSelector({
  color: flow(selectStyleColor, pick(['success', 'info', 'warning', 'danger'])),
})
export default connect(getState)(Component)
