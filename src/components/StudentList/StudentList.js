import { connect } from 'react-redux'
import { structuredSelector } from 'cape-select'
import { programOptions } from '../../select/program'
import { showByProgram } from '../../select/show'

import { itemsSearched } from './'
import Component from './StudentListEl'

const getState = structuredSelector({
  students: itemsSearched,
  shows: showByProgram,
  programOptions,
})

export default connect(getState)(Component)
