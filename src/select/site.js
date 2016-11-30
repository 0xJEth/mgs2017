import { property } from 'lodash'
import { getOr, sortBy } from 'lodash/fp'
import { createSelector } from 'reselect'
import { socialLinks } from './social'

export const getArchive = createSelector(property('db.archive'), sortBy('title'))
export const getSiteId = property('db.siteId')
export const getSiteSocial = createSelector(getOr({}, 'db.social'), socialLinks)
