import { connect } from 'react-redux'
import { structuredSelector } from 'cape-select'
import { getSizeId } from '../../style'
import Component from './HeaderEl'

export const getState = structuredSelector({
  sizeId: getSizeId,
  // widthRem: getWidthRem,
  // widthPx: getWidthPx,
})
export default connect(getState)(Component)
