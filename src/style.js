import { flow, map, merge, method, propertyOf, zipObject } from 'lodash'
import { createObj } from 'cape-lodash'

export const rem = flow(String, method('concat', 'rem'))

export const sizeKeys = ['0p5', '1', '2', '3', '4', '5', '6']
export const sizes = [0.5, 1, 2, 3, 4, 5, 6]
export function styleBuilder(style, prefix) {
  const sizeBuilder = createObj(style)
  const remBuilder = flow(rem, sizeBuilder)
  return merge(
    { [prefix]: remBuilder, [`${prefix}0`]: sizeBuilder(0) },
    zipObject(map(sizeKeys, key => prefix + key), map(sizes, remBuilder))
  )
}
const remStyles = {
  m: 'margin',
  mt: 'marginTop',
  mb: 'marginBottom',
  p: 'padding',
  pt: 'paddingTop',
  pb: 'paddingBottom',
}
export const styles = {
  ...merge({}, ...map(remStyles, styleBuilder)),
}

export default function css(className) {
  return merge({}, ...map(className.split(' '), propertyOf(styles)))
}
