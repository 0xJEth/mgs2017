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
export const position = {
  name: 'Sort Order',
  min: 0,
  max: 20,
  position: 15,
  type: 'number',
}
export const associatedMedia = {
  id: 'associatedMedia',
  collectionId: 'MediaObject',
  description: 'Link to vimeo, soundcoud etc.',
  name: 'Art URL',
  position: 5,
  type: 'url',
}
export const image = {
  accept: 'image/*',
  collectionId: 'ImageObject',
  id: 'image',
  name: 'Image',
  position: 12,
  single: true,
  type: 'file',
}
