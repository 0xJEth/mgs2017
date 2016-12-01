import { isFunction } from 'lodash'
import { filterItems, validate } from './perms'

/* global describe it expect */

const perms = {
  isAnonymous: true,
  isAuthenticated: false,
  isStudent: false,
}
const menu = {
  students: {
    href: '/students',
    id: 'students',
    name: 'Students',
    position: 2,
  },
  auth: {
    action: 'auth',
    id: 'auth',
    name: 'Login',
    position: 10,
    validator: {
      isAnonymous: true,
    },
  },
  home: {
    href: '/',
    id: 'home',
    name: 'Schedule',
    position: 0,
  },
  logout: {
    action: 'logout',
    id: 'logout',
    name: 'Logout',
    position: 10,
    validator: {
      isAuthenticated: true,
    },
  },
  me: {
    href: '/me',
    id: 'me',
    name: 'Edit Profile',
    position: 9,
    validator: {
      isAuthenticated: true,
    },
  },
}

it('checks validator props to match perms', () => {
  const validateChecker = validate(perms)
  expect(isFunction(validateChecker)).toBe(true)
  expect(validateChecker({ validator: { isAnonymous: true } })).toBe(true)
  expect(validateChecker({ validator: { isAnonymous: false } })).toBe(false)
})

describe('filterItems', () => {
  it('filters out menu items when validator false', () => {
    console.log(filterItems(menu))
  })
})
