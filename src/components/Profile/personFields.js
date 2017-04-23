export const ACCEPT_FILE_TYPE = 'image/jpeg'

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
export const instagram = {
  description: 'Instagram ID',
  id: 'instagram',
  position: 3,
  name: 'Instagram',
  type: 'text',
}
export const soundcloud = {
  description: 'Soundcloud username',
  id: 'soundcloud',
  position: 5,
  name: 'Soundcloud',
  type: 'text',
}
export const twitter = {
  description: 'Twitter Handle',
  id: 'twitter',
  position: 4,
  name: 'Twitter',
  type: 'text',
}
export const vimeo = {
  id: 'vimeo',
  description: 'Vimeo username',
  name: 'Vimeo',
  position: 6,
  type: 'text',
}
export const youtube = {
  id: 'youtube',
  description: 'Youtube username',
  name: 'Youtube',
  position: 6,
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
export const url = {
  id: 'url',
  description: 'Homepage URL',
  name: 'Website',
  type: 'url',
}
export const art = {
  accept: ACCEPT_FILE_TYPE,
  collectionId: 'ImageObject',
  id: 'art',
  name: 'Artwork',
  position: 12,
  single: false,
  type: 'file',
}
const personFields = [
  name,
  email,
  url,
  facebook,
  instagram,
  twitter,
  soundcloud,
  youtube,
  vimeo,
  art,
]

export default personFields
