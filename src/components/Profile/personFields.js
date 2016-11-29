export const email = {
  id: 'email',
  position: 1,
  isRequired: true,
  type: 'email',
  name: 'Contact Email',
  validators: ['isRequired', 'isEmail'],
}
export const facebook = {
  id: 'facebook',
  position: 2,
  name: 'Facebook',
  type: 'text',
}
export const name = {
  id: 'name',
  description: 'Name as you would like it displayed',
  position: 0,
  isRequired: true,
  name: 'Display Name',
  type: 'text',
  validators: ['isRequired'],
}
const personFields = [
  email,
  name,
  facebook,
]

export default personFields
