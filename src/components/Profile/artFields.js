export const ACCEPT_FILE_TYPE = 'image/jpeg'

export const title = {
  name: 'Title',
  type: 'text',
  required: true,
  description: 'Title of image.',
  validators: ['isRequired'],
}
export const description = {
  name: 'Short Description',
  type: 'text',
  description: '140 Character Limit',
  validators: [['maxLength', 140]],
}
export const size = {
  name: 'Size',
  type: 'dimensions',
}
export const medium = {
  name: 'Medium',
  type: 'text',
}
export const year = {
  name: 'Year',
  type: 'number',
  min: 2000,
  max: 2017,
  description: 'Year artwork was created.',
}
export const sortOrder = {
  name: 'Sort Order',
  type: 'number',
  min: 0,
  max: 20,
}

const artFields = [
  title,
  description,
  size,
  medium,
  year,
  sortOrder,
]

export default artFields
