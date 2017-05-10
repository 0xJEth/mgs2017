import reducer, { addRoutes } from 'location-info'

export const routes = {
  colors: '/colors',
  filmfest: '/details/recPkxpU5hm2lfIWC',
  details: '/details/:showId',
  home: '/',
  me: '/me',
  studentList: '/students',
  studentDetail: '/students/person',
}
export const locInfo = reducer(undefined, addRoutes(routes))
