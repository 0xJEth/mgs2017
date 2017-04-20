import { connect } from 'react-redux'
import { flow } from 'lodash'
import { pick } from 'lodash/fp'
import { createStructuredSelector } from 'reselect'
import Component from 'cape-mixer/lib/AlertEl'
import { selectStyleColor } from '../select/style'

const getState = createStructuredSelector({
  color: flow(selectStyleColor, pick(['success', 'info', 'warning', 'danger'])),
})
export default connect(getState)(Component)
