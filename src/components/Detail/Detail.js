import { flow, get } from 'lodash/fp'
import { connect } from 'react-redux'
import { getProps, getSelect } from 'cape-select'
import { createSelector, createStructuredSelector } from 'reselect'
import { itemsFilled } from '../Schedule'

import Component from './DetailEl'

const getShowId = flow(getProps, get('route.params.showId'))

// const itemsFilled = createSelector(
//   selectGraph, getShowGroup,
//   (graph, graphType) => mapValues(graphType, buildFullEntity(0, graph))
// )

const selectShow = getSelect(itemsFilled, getShowId)
const mapProps = createStructuredSelector({
  show: selectShow,
})
export default connect(mapProps)(Component)
