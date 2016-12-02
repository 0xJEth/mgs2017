import { createMarkupForStyles } from 'react-dom/lib/CSSPropertyOperations'
import { isFunction, map, omitBy } from 'lodash'
import fs from 'fs'
import { styles } from './styleBuilder'

const css = map(omitBy(styles, isFunction), (style, name) =>
  `.${name} { ${createMarkupForStyles(style)} }`
)
fs.writeFileSync('src/cape.css', css.join('\n'))
