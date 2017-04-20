import React from 'react'
import PropTypes from 'prop-types'
import GoogleMap from 'google-map-react'
import { map } from 'lodash'
// import css from 'cape-style'
import LocationItem from './DetailMapLocation'

function DetailMap({ locations, style, ...props }) {
  return (
    <div
      className="google-map-container"
      id="detail-map-locations"
      style={style}
    >
      <GoogleMap
        {...props}
        bootstrapURLKeys={{
          key: 'AIzaSyCWW7BwZB4inhmk-k5RWdXRo2pD-5X--YA',
          language: 'en',
        }}
      >
        { map(locations, location => <LocationItem key={location.id} {...location} />) }
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
    mapTypeControl: PropTypes.bool,
    streetViewControl: PropTypes.bool,
    zoomControl: PropTypes.bool,
  }),
  locations: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.objectOf(PropTypes.string),
  togglePin: PropTypes.func,
  zoom: PropTypes.number,
}
DetailMap.defaultProps = {
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
  zoom: 14,
}
export default DetailMap
