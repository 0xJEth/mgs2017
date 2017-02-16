import createRouter from 'location-info'

const { addRoutes, locationInfo } = createRouter({ trailingSlash: false })
addRoutes({
  colors: '/colors',
  filmfest: '/details/recPkxpU5hm2lfIWC',
  details: '/details/:showId',
  home: '/',
  me: '/me',
  studentList: '/students',
})

export default locationInfo
