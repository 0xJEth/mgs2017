import { property } from 'lodash'

export const stylePath = ['db', 'style']
export const styleBasePath = stylePath.concat('base')
export const selectStyles = property(styleBasePath)
export const styleBaseColorPath = styleBasePath.concat('color')
export const selectStyleColor = property(styleBaseColorPath)

export const styleCustomPath = stylePath.concat('custom')
