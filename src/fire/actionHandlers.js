import { login } from 'cape-redux-auth'
import { userFields } from './util'

export function handleAuth({ auth, googleAuth }, { dispatch }) {
  auth.signInWithPopup(googleAuth).then(({ user }) => {
    dispatch(login(userFields(user)))
    // console.log(credential)
  })
}
