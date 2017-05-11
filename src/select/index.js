import { createStructuredSelector } from 'reselect'
import { getProgramFull } from './program'
import { getShowFull } from './show'
import { getStudent } from './person'

export const selectGraph = createStructuredSelector({
  Show: getShowFull,
  Program: getProgramFull,
  Student: getStudent,
})
