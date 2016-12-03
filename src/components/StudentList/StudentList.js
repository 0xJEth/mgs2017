import { connect } from 'react-redux'
import { structuredSelector } from 'cape-select'
import { itemsSearched } from './'
import Component from './StudentListEl'

const getState = structuredSelector({
  students: itemsSearched,
})

export default connect(getState)(Component)
