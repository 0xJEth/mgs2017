import { createStructuredSelector } from 'reselect'
import { getProgramFull } from './program'
import { getShowFull } from './show'

export const selectGraph = createStructuredSelector({
  Show: getShowFull,
  Program: getProgramFull,
})
