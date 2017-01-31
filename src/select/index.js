import { createStructuredSelector } from 'reselect'
import { getProgramFull } from './program'
import { getShowFull } from './show'
import { getStudent } from './student'

export const selectGraph = createStructuredSelector({
  Show: getShowFull,
  Program: getProgramFull,
  Student: getStudent,
})
