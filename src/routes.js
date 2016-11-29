import createRouter from 'location-info'

const { addRoutes, locationInfo } = createRouter({ trailingSlash: false })
addRoutes({
  home: '/',
  me: '/me',
  studentList: '/students',
  colors: '/colors',
})

export default locationInfo
