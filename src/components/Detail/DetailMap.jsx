import React, { PropTypes } from 'react'
import GoogleMap from 'google-map-react'
import css from '../../style'
import Location from './DetailMapLocation'

function DetailMap({ center, zoom, greatPlaceCoords }) {
  return (
    <div
      className="google-map-container"
      id="detail-map-locations"
    >
      <GoogleMap
        defaultCenter={center}
        defaultZoom={zoom}
        bootstrapURLKeys={{
          key: 'AIzaSyCWW7BwZB4inhmk-k5RWdXRo2pD-5X--YA',
          language: 'en',
        }}
      >
        <Location lat={59.955413} lng={30.337844} />
        <Location lat={greatPlaceCoords.lat} lng={greatPlaceCoords.lng} />
      </GoogleMap>
    </div>
  )
}

DetailMap.propTypes = {
  center: PropTypes.object,
  defaultCenter: PropTypes.object,
  locations: PropTypes.array,
  options: PropTypes.object,
  togglePin: PropTypes.func,
  zoom: PropTypes.number,
  greatPlaceCoords: PropTypes.object,
}
DetailMap.defaultProps = {
  center: { lat: 39.30902, lng: -76.62016 },
  greatPlaceCoords: { lat: 39.310428, lng: -76.623877 },
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
