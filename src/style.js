import { bgColor, styleBuilder, styles } from './styleBuilder'

export const customStyle = {
  ...styles,
  bgYlo: bgColor('yellow'),
}
export const css = styleBuilder(customStyle)

export default css
