import { flow, map, merge, method, propertyOf, range, zipObject } from 'lodash'
import { createObj } from 'cape-lodash'

export const rem = flow(String, method('concat', 'rem'))

export function styleBuilder(style, prefix) {
  const sizeKeys = ['0p5', '1', '2', '3', '4', '5', '6']
  const sizes = [0.5, 1, 2, 3, 4, 5, 6]
  const sizeBuilder = createObj(style)
  const remBuilder = flow(rem, sizeBuilder)
  return merge(
    { [prefix]: remBuilder, [`${prefix}0`]: sizeBuilder(0) },
    zipObject(map(sizeKeys, key => prefix + key), map(sizes, remBuilder))
  )
}
const remStyles = {
  fs: 'fontSize',
  m: 'margin',
  mt: 'marginTop',
  mb: 'marginBottom',
  p: 'padding',
  pt: 'paddingTop',
  pb: 'paddingBottom',
}
export function buildNumSizes(style, prefix, start = 0, end = 10) {
  const sizes = range(start, end)
  const sizeBuilder = createObj(style)
  return zipObject(map(sizes, key => prefix + key), map(sizes, sizeBuilder))
}
export const styles = {
  ...merge({}, ...map(remStyles, styleBuilder)),
  static: { position: 'static' },
  relative: { position: 'relative' },
  absolute: { position: 'absolute' },
  fixed: { position: 'fixed' },
  top0: { top: 0 },
  right0: { right: 0 },
  bottom0: { bottom: 0 },
  left0: { left: 0 },
  ...buildNumSizes('zIndex', 'z'),
}

export default function css(className) {
  return merge({}, ...map(className.split(' '), propertyOf(styles)))
}
