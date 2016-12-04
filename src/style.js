import { divide, flow, property } from 'lodash'
import { createSelector } from 'reselect'
import { bgColor, styleBuilder, styles } from './styleBuilder'

export const getWindowSize = property('windowSize')
export const getWidthPx = flow(getWindowSize, property('width'))
export const getRemPx = flow(getWindowSize, property('rem'))
export const getWidthRem = createSelector(getWidthPx, getRemPx, divide)
export const remSizes = [
  { min: 90, id: 'wide' },
  { min: 70, id: 'goldiLocks' },
  { max: 50, id: 'skinny' },
]
export function sizeChecker(widthRem) {
  return ({ min, max }) => {
    if (min) return widthRem >= min
    if (max) return widthRem <= max
    return true
  }
}
export function getSizeId(state) {
  if (!getWindowSize(state).rem) return remSizes[0].id
  const widthRem = getWidthRem(state)
  return widthRem < 50 ? 'skinny' : 'wide'
  // return get(find(remSizes, sizeChecker(widthRem)), 'id', remSizes[2].id)
}

export const customStyle = {
  ...styles,
  bgYlo: bgColor('yellow'),
}
export const css = styleBuilder(customStyle)

export default css
