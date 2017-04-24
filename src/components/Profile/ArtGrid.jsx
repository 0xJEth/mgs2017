import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import ArtEdit from './ArtGridLink'

function ArtGrid({ createItem, items }) {
  return (
    <div>
      <h2>Artwork:</h2>
      <button onClick={createItem}>Add Artwork</button>
      <ul>
        {map(items, ArtEdit)}
      </ul>
    </div>
  )
}
ArtGrid.defaultProps = {
  items: null,
}
ArtGrid.propTypes = {
  createItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
}
export default ArtGrid
