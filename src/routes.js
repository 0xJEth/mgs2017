import createRouter from 'location-info'

const { addRoutes, locationInfo } = createRouter({ trailingSlash: false })
addRoutes({
  home: '/',
  me: '/me',
  studentList: '/students',
})

export default locationInfo
