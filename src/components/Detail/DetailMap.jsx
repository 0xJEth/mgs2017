import React, { PropTypes } from 'react'
import GoogleMap from 'google-map-react'
import { find, map } from 'lodash'
// import css from '../../style'
import LocationItem from './DetailMapLocation'

function DetailMap({ defaultCenter, zoom, show }) {
  return (
    <div
      className="google-map-container"
      id="detail-map-locations"
    >
      <GoogleMap
        defaultCenter={defaultCenter}
        defaultZoom={zoom}
        bootstrapURLKeys={{
          key: 'AIzaSyCWW7BwZB4inhmk-k5RWdXRo2pD-5X--YA',
          language: 'en',
        }}
      >
        { map(show, showItem => <LocationItem key={showItem.id} {...find(showItem.location)} />) }
      </GoogleMap>
    </div>
  )
}

DetailMap.propTypes = {
  // center: PropTypes.object,
  defaultCenter: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
  options: PropTypes.shape({
    scrollwheel: PropTypes.bool,
  }),
  togglePin: PropTypes.func,
  zoom: PropTypes.number,
}
DetailMap.defaultProps = {
  center: { lat: 39.30902, lng: -76.62016 },
  defaultCenter: {
    lat: 39.30902,
    lng: -76.62016,
  },
  options: {
    scrollwheel: false,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl: true,
  },
  show: PropTypes.objectOf(PropTypes.object),
  zoom: 14,
}
export default DetailMap
