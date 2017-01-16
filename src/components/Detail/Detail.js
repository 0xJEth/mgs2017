import { flow, get } from 'lodash/fp'
import { connect } from 'react-redux'
import { getProps, getSelect } from 'cape-select'
import { createStructuredSelector } from 'reselect'

import { getShow } from '../../select'
import Component from './DetailEl'

const getShowId = flow(getProps, get('route.params.showId'))
const selectShow = getSelect(getShow, getShowId)
const mapProps = createStructuredSelector({
  show: selectShow,
})
export default connect(mapProps)(Component)
