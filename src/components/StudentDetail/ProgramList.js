import { connect } from 'react-redux'
// import { createSelector, createStructuredSelector } from 'reselect'
import { getProp, getSelect } from 'cape-select'
import { getProgramFull } from '../../select/program'
import Component from './ProgramListEl'

export const getProgram = getSelect(getProgramFull, getProp('id'))

export default connect(getProgram)(Component)
