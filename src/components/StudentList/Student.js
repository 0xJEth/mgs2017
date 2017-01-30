import { connect } from 'react-redux'
import { nthArg, get } from 'lodash'
import { createSelector } from 'reselect'
import { structuredSelector } from 'cape-select'
import { mapDispatchToProps } from 'cape-redux'
import { saveShow } from '../../fire/actions'
import { showByProgram } from '../../select/show'
import Component from './StudentEl'

function getProgramShows({ program, show, shows }, showsIndex) {
  if (show && !shows) return undefined
  return showsIndex[program.id]
}
const getShows = createSelector(
  nthArg(1),
  showByProgram,
  getProgramShows
)
const getState = structuredSelector({
  shows: getShows,
})
function studentShowHandler(object) {
  return ({ target: { value } }) =>
    saveShow({
      subject: { type: 'Show', id: value },
      predicate: 'student',
      object,
    }, { previousSubject: { id: get(object, ['show', 'id']), type: 'Show' } })
}
const actions = mapDispatchToProps(student => ({
  saveShow: studentShowHandler(student),
}))
export default connect(getState, actions)(Component)
