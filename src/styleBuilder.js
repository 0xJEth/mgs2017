import { curry, flow, keys, map, merge, method, propertyOf, range, zipObject } from 'lodash'
import { createObj } from 'cape-lodash'
import tinycolor from 'tinycolor2'

export const grey = tinycolor({ r: 220, g: 220, b: 220 })

export function boxShadow(color = grey) {
  return { boxShadow: `0 0 .2em 0 ${color.setAlpha(0.2).toRgbString()}` }
}

// Takes a number or string and appends 'rem' to the end of it.
// Example: rem(1) === '1rem'
export const rem = flow(String, method('concat', 'rem'))

// Takes css defination style and a className prefix and builds out options with sizes from 0-6.
// Example: remStyleBuilder('margin', 'm') == { m0: { margin: 0 }, m0p5: { margin: '0.5rem' }, ...}
export function remStyleBuilder(style, prefix) {
  const sizes = {
    '0p125': 0.125,
    '0p25': 0.25,
    '0p5': 0.5,
    '0p75': 0.75,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
  }
  const sizeBuilder = createObj(style)
  const remBuilder = flow(rem, sizeBuilder)
  return merge(
    { [prefix]: remBuilder, [`${prefix}0`]: sizeBuilder(0) },
    zipObject(map(keys(sizes), key => prefix + key), map(sizes, remBuilder))
  )
}
// Define the things that should be sent to remStyleBuilder.
const remStyles = {
  br: 'borderRadius',
  bw: 'borderWidth',
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
export function buildNumSizes(style, prefix, start = 0, end = 11) {
  const sizes = range(start, end)
  const sizeBuilder = createObj(style)
  return zipObject(map(sizes, key => prefix + key), map(sizes, sizeBuilder))
}
// Builds an object with the position property set to the first argument.
// Example: pos('static') == { position: 'static' }
export const pos = createObj('position')
export const bgColor = createObj('backgroundColor')
export const float = createObj('float')

export const floatLeft = float('left')
export const floatRight = float('right')
export const left50p = { left: '50%' }
export const top50p = { top: '50%' }
// Combine all the builders to make the bulk of what index.css was. Basically an index of className
// values that will turn into the style.
// styles.pt3 == { paddingTop: '3rem' }
export const styles = {
  ...merge({}, ...map(remStyles, remStyleBuilder)),
  absolute: pos('absolute'),
  bn: { borderStyle: 'none', borderWidth: 0 },
  ba: { borderStyle: 'solid', borderWidth: '1px' },
  bb: { borderBottomStyle: 'solid', borderBottomWidth: '1px' },
  bbn: { borderBottom: 'none' },
  bl: { borderLeftStyle: 'solid', borderLeftWidth: '1px' },
  bln: { borderLeft: 'none' },
  bottom0: { bottom: 0 },
  br: { borderRightStyle: 'solid', borderRightWidth: '1px' },
  brn: { borderRight: 'none' },
  bt: { borderTopStyle: 'solid', borderTopWidth: '1px' },
  btn: { borderTop: 'none' },
  column: floatLeft,
  columnRtl: floatRight,
  contentAround: { alignContent: 'space-around' },
  contentCenter: { alignContent: 'center' },
  contentEnd: { alignContent: 'flex-end' },
  contentBetween: { alignContent: 'space-between' },
  contentStart: { alignContent: 'flex-start' },
  contentStretch: { alignContent: 'stretch' },
  fixed: pos('fixed'),
  fl: floatLeft,
  flex: { display: 'flex' },
  ...buildNumSizes('flex', 'flex'),
  flexAuto: { flex: '1 1 auto', minWidth: 0, minHeight: 0 },
  flexColumn: { flexDirection: 'column' },
  flexNone: { flex: 'none' },
  flexRow: { flexDirection: 'row' },
  flexWrap: { flexWrap: 'wrap' },
  fr: floatRight,
  h100: { height: '100%' },
  h100vh: { height: '100vh' },
  itemsBaseline: { alignItems: 'baseline' },
  itemsCenter: { alignItems: 'center' },
  itemsEnd: { alignItems: 'flex-end' },
  itemsStart: { alignItems: 'flex-start' },
  itemsStretch: { alignItems: 'stretch' },
  justifyAround: { justifyContent: 'space-around' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyCenter: { justifyContent: 'center' },
  justifyEnd: { justifyContent: 'flex-end' },
  justifyStart: { justifyContent: 'flex-start' },
  left0: { left: 0 },
  left50p,
  left1p5: { left: '1.5rem' },
  lsInline: { display: 'flex', justifyContent: 'center' },
  lsNone: { listStyle: 'none' },
  mlrauto: { marginLeft: 'auto', marginRight: 'auto' },
  mw100p: { maxWidth: '100%' },
  mw1: { maxWidth: '1rem' },
  mw2: { maxWidth: '2rem' },
  mw3: { maxWidth: '4rem' },
  mw4: { maxWidth: '8rem' },
  mw5: { maxWidth: '16rem' },
  mw6: { maxWidth: '32rem' },
  mw7: { maxWidth: '48rem' },
  mw8: { maxWidth: '64rem' },
  mw9: { maxWidth: '96rem' },
  mwNone: { maxWidth: 'none' },
  ...buildNumSizes('order', 'order'),
  orderLast: { order: 99999 },
  pos,
  positionCenterX: merge({ transform: 'translateX(-50%)' }, left50p),
  positionCenterY: merge({ transform: 'translateY(-50%)' }, top50p),
  positionCenter: merge({ transform: 'translate(-50%,-50%)' }, top50p, left50p),
  relative: pos('relative'),
  right0: { right: 0 },
  static: pos('static'),
  selfBaseline: { alignSelf: 'baseline' },
  selfCenter: { alignSelf: 'center' },
  selfEnd: { alignSelf: 'flex-end' },
  selfStart: { alignSelf: 'flex-start' },
  selfStretch: { alignSelf: 'stretch' },
  textCenter: { textAlign: 'center' },
  textReset: {
    textDecoration: 'none',
    textShadow: 'none',
    textTransform: 'none',
    letterSpacing: 'normal',
  },
  top0: { top: 0 },
  top50p,
  w50: { width: '50%' },
  w100vw: { width: '100vw' },
  ...buildNumSizes('zIndex', 'z'),
}
// Takes a className string and converts it into an object that can be sent to react style prop.
// First arg is the dictionary/index. Second arg is the className string.
export const styleBuilder = curry((styleObj, className) =>
  merge({}, ...map(className.split(' '), propertyOf(styleObj)))
)
// styleBuilder with default styles defined above partially applied.
// Example: css('static top0 p0 m3') == { position: 'static', top: 0, padding: 0, margin: '3rem' }
export const css = styleBuilder(styles)
// Default export is a function that converts className string above.
export default css
