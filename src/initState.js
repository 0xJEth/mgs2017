import reducer, { addRoutes } from 'location-info'

// Define our inital state object. This could be a fetch() to an API endpoint.

export const routes = {
  colors: '/colors',
  filmfest: '/details/recPkxpU5hm2lfIWC',
  details: '/details/:showId',
  home: '/',
  me: '/me(/:artId)',
  studentList: '/students',
  studentDetail: '/students/:studentId',
}
export const locInfo = reducer(undefined, addRoutes(routes))

export default {
  db: {
    cdnUrl: 'http://dl-f.imgix.net/',
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyB4ZUWrwOLk0AcIlJvRjX2Npw4VWuAHjO0',
      authDomain: 'mica2017-18d52.firebaseapp.com',
      databaseURL: 'https://mica2017-18d52.firebaseio.com',
      storageBucket: 'mica2017-18d52.appspot.com',
    },
    entityType: {
      CreativeWork: true,
      ImageObject: true,
      MediaObject: true,
      ShowGroup: true,
      Show: true,
      Program: true,
      Location: true,
      Person: true,
      Student: true,
    },
  },
  locInfo,
}
