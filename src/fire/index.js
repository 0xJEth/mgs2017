import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyB4ZUWrwOLk0AcIlJvRjX2Npw4VWuAHjO0',
  authDomain: 'mica2017-18d52.firebaseapp.com',
  databaseURL: 'https://mica2017-18d52.firebaseio.com',
}
firebase.initializeApp(config)

export const TIMESTAMP = firebase.database.ServerValue.TIMESTAMP
export const auth = firebase.auth()
export const db = firebase.database().ref()
export const entity = db.child('entity')
