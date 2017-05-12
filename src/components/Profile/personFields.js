export const ACCEPT_FILE_TYPE = 'image/jpeg'

export const contactEmail = {
  id: 'contactEmail',
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
export const statement = {
  id: 'statement',
  description: 'A statement to accompany your profile. This input accepts Markdown. Underscores either side text makes it _italic_, two asterixes make text **bold**, and links can be handled [like this](url). ',
  position: 1,
  minRows: 6,
  name: 'Artist Statement',
  type: 'textarea',
  // validators: ['isRequired'],
}

const personFields = [
  name,
  contactEmail,
  statement,
  url,
  facebook,
  instagram,
  twitter,
  soundcloud,
  youtube,
  vimeo,
]

export default personFields
