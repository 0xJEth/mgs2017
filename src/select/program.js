import { map, mapValues, sortBy } from 'lodash/fp'
import { createSelector } from 'reselect'
import { entityTypeSelector } from 'redux-graph'
import { renamePick, setField } from 'cape-lodash'
import { getStudent } from './person'
// import { studentsFilled } from './student'

export const doIf = onTrue => thing => (thing ? onTrue(thing) : thing)
export const getProgram = entityTypeSelector('Program')
export function addFields(students) {
  const student = ({ id }) => students[id]
  return setField('students', ({ rangeIncludes }) =>
    (rangeIncludes && mapValues(student, rangeIncludes.program)) || {})
}

export const getProgramFull = createSelector(
  getProgram,
  getStudent,
  (programs, students) => mapValues(addFields(students), programs)
)
export const programSorted = createSelector(getProgram, sortBy('name'))
export const programOptions = createSelector(programSorted,
  doIf(map(renamePick({ id: 'value', name: 'name' })))
)
