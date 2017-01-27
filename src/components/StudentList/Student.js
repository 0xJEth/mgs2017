import { connect } from 'react-redux'
import { nthArg } from 'lodash'
import { createSelector } from 'reselect'
import { structuredSelector } from 'cape-select'
import { showByProgram } from '../../select/show'
import Component from './StudentEl'

function getProgramShows({ program, show }, shows) {
  if (show) return undefined
  return shows[program.id]
}
const getShows = createSelector(
  nthArg(1),
  showByProgram,
  getProgramShows
)
const getState = structuredSelector({
  shows: getShows,
})

export default connect(getState)(Component)
