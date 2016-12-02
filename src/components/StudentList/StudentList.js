import { connect } from 'react-redux'
import { entityTypeSelector } from 'redux-graph'
import { structuredSelector } from 'cape-select'
import Component from './StudentListEl'

const getStudents = entityTypeSelector('Student')

const getState = structuredSelector({
  students: getStudents,
})

export default connect(getState)(Component)
