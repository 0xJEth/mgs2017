import { connect } from 'react-redux'
import { property } from 'lodash'
import { structuredSelector } from 'cape-select'
import { getSizeId } from 'cape-style'
import Component from './HeaderEl'

export const getState = structuredSelector({
  sizeId: getSizeId,
  siteName: property('db.siteName'),
  // widthRem: getWidthRem,
  // widthPx: getWidthPx,
})
export default connect(getState)(Component)
