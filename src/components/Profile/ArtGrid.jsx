import React from 'react'
import css from 'cape-style'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import ArtEdit from './ArtGridLink'

function ArtGrid({ createItem, items }) {
  return (
    <div className="artworks">
      <h2>Artworks:</h2>
      <button onClick={createItem}>Add Artwork</button>
      <ul style={css('lsNone m0 mt1 p0')}>
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
