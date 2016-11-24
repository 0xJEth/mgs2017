export function handleAuth({ auth, googleAuth }) {
  auth.signInWithPopup(googleAuth).then(({ credential, user }) => {
    console.log(user)
    console.log(credential)
  })
}
