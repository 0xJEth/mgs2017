export const ACCEPT_FILE_TYPE = 'image/jpeg'

export const title = {
  name: 'Title',
  type: 'text',
  required: true,
  description: 'Title of image.',
  validators: ['isRequired'],
  position: 0,
}
export const description = {
  name: 'Short Description',
  type: 'text',
  description: '140 Character Limit',
  validators: [['maxLength', 140]],
  position: 1,
}
export const size = {
  name: 'Size',
  type: 'dimensions',
  position: 2,
}
export const year = {
  name: 'Year',
  min: 2000,
  max: 2017,
  description: 'Year artwork was created.',
  position: 3,
  type: 'number',
}
export const medium = {
  name: 'Medium',
  type: 'text',
  position: 4,
}
export const sortOrder = {
  name: 'Sort Order',
  min: 0,
  max: 20,
  position: 5,
  type: 'number',
}
export const image = {
  accept: ACCEPT_FILE_TYPE,
  collectionId: 'ImageObject',
  id: 'image',
  name: 'Image',
  position: 12,
  single: true,
  type: 'file',
}
