import { identity, nthArg } from 'lodash'
import { createSimpleAction, noopAction } from 'cape-redux'

export const AUTH = 'fire/AUTH'
export const auth = noopAction(AUTH)

export const LOGOUT = 'fire/LOGOUT'
export const logout = noopAction(LOGOUT)

export const SAVE_STUDENT_SHOW = 'fire/SAVE_STUDENT_SHOW'
export const saveShow = createSimpleAction(SAVE_STUDENT_SHOW, identity, nthArg(1))
