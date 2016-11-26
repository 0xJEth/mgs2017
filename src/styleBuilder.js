import { curry, flow, map, merge, method, propertyOf, range, zipObject } from 'lodash'
import { createObj } from 'cape-lodash'

// Takes a number or string and appends 'rem' to the end of it.
// Example: rem(1) === '1rem'
export const rem = flow(String, method('concat', 'rem'))

// Takes css defination style and a className prefix and builds out options with sizes from 0-6.
// Example: remStyleBuilder('margin', 'm') == { m0: { margin: 0 }, m0p5: { margin: '0.5rem' }, ...}
export function remStyleBuilder(style, prefix) {
  const sizeKeys = ['0p5', '1', '2', '3', '4', '5', '6']
  const sizes = [0.5, 1, 2, 3, 4, 5, 6]
  const sizeBuilder = createObj(style)
  const remBuilder = flow(rem, sizeBuilder)
  return merge(
    { [prefix]: remBuilder, [`${prefix}0`]: sizeBuilder(0) },
    zipObject(map(sizeKeys, key => prefix + key), map(sizes, remBuilder))
  )
}
// Define the things that should be sent to remStyleBuilder.
const remStyles = {
  br: 'borderRadius',
  fs: 'fontSize',
  lh: 'lineHeight',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
}
// Similar to remStyleBuilder but where the value is a number instead of rem string.
// buildNumSizes('zIndex', 'z') == { z0: { zIndex: 0 }, z1: { zIndex: 1 }, z2: { zIndex: 2 } ...}
export function buildNumSizes(style, prefix, start = 0, end = 10) {
  const sizes = range(start, end)
  const sizeBuilder = createObj(style)
  return zipObject(map(sizes, key => prefix + key), map(sizes, sizeBuilder))
}
// Builds an object with the position property set to the first argument.
// Example: pos('static') == { position: 'static' }
export const pos = createObj('position')
export const bgColor = createObj('backgroundColor')

// Combine all the builders to make the bulk of what index.css was. Basically an index of className
// values that will turn into the style.
// styles.pt3 == { paddingTop: '3rem' }
export const styles = {
  ...merge({}, ...map(remStyles, remStyleBuilder)),
  pos,
  static: pos('static'),
  relative: pos('relative'),
  absolute: pos('absolute'),
  fixed: pos('fixed'),
  top0: { top: 0 },
  right0: { right: 0 },
  bottom0: { bottom: 0 },
  left0: { left: 0 },
  left1p5: { left: '1.5rem' },
  lsNone: { listStyle: 'none' },
  textCenter: { textAlign: 'center' },
  b1: { border: '1px solid currentColor' },
  bb1: { borderBottom: '1px solid currentColor' },
  ...buildNumSizes('zIndex', 'z'),
}
// Takes a className string and converts it into an object that can be sent to react style prop.
// First arg is the dictionary/index. Second arg is the className string.
export const styleBuilder = curry((styleObj, className) =>
  merge({}, ...map(className.split(' '), propertyOf(styles)))
)
// styleBuilder with default styles defined above partially applied.
// Example: css('static top0 p0 m3') == { position: 'static', top: 0, padding: 0, margin: '3rem' }
export const css = styleBuilder(styles)
// Default export is a function that converts className string above.
export default css
