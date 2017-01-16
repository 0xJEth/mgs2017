import createRouter from 'location-info'

const { addRoutes, locationInfo } = createRouter({ trailingSlash: false })
addRoutes({
  colors: '/colors',
  details: '/details/*',
  home: '/',
  me: '/me',
  studentList: '/students',
})

export default locationInfo
