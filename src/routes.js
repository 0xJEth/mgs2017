import createRouter from 'location-info'

const { addRoutes, locationInfo } = createRouter({ trailingSlash: false })
addRoutes({
  colors: '/colors',
  filmfest: '/details/filmfest',
  details: '/details/:showId',
  home: '/',
  me: '/me',
  studentList: '/students',
})

export default locationInfo
