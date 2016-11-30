import { connect } from 'react-redux'
import { property } from 'lodash'
import { createStructuredSelector } from 'reselect'
import Component from './FooterEl'

export const getState = createStructuredSelector({
  archive: property('db.archive'),
})

export default connect(getState)(Component)
