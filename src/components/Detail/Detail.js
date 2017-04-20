import { flow, get } from 'lodash/fp'
import { connect } from 'react-redux'
import { getProps, getSelect } from 'cape-select'
import { createStructuredSelector } from 'reselect'
import { itemsFilled } from '../Schedule'
import { detailClose } from './back'
import Component from './DetailEl'

const getShowId = flow(getProps, get('params.showId'))

const selectShow = getSelect(itemsFilled, getShowId)
const mapProps = createStructuredSelector({
  showGroup: selectShow,
})
const actions = {
  detailClose,
}
export default connect(mapProps, actions)(Component)
