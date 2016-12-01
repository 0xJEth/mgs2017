import { isFunction } from 'lodash'
import { validate } from './perms'

/* global it expect */

const perms = {
  isAnonymous: true,
  isAuthenticated: false,
  isStudent: false,
}

it('checks validator props to match perms', () => {
  const validateChecker = validate(perms)
  expect(isFunction(validateChecker)).toBe(true)
  expect(validateChecker({ validator: { isAnonymous: true } })).toBe(true)
  expect(validateChecker({ validator: { isAnonymous: false } })).toBe(false)
})
