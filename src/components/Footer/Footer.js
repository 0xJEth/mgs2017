import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Component from './FooterEl'

import { getArchive, getSiteId, getSiteSocial } from '../../select/site'

export const getState = createStructuredSelector({
  archive: getArchive,
  siteId: getSiteId,
  social: getSiteSocial,
})

export default connect(getState)(Component)
