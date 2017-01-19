import React, { PropTypes } from 'react'

function DetailMapLocation({ active, building, id, name, street, zip, galleryHours }) {
  return (
    <div >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{
          cursor: 'pointer',
        }}
      >
        <path style={{ fill: '#322b00' }} d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.66 5.38-1.077 1.275-2.302 2.723-3.34 4.698-1.038-1.976-2.263-3.423-3.34-4.697C7.057 11.09 6 9.84 6 7.603 6 4.617 8.804 2 12 2zm0-2C7.802 0 4 3.403 4 7.602c0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398C20 3.402 16.2 0 12 0zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      </svg>
      <span>
        { active ?
          <div className="mapPopup">
            <h3 className="m0">{name}</h3>
            <div className="building">
              {building}
            </div>
            <div className="address">
              {street}
              <br />
              {zip}
            </div>
            {galleryHours && <div className="openHours">
              <strong>Gallery Hours:</strong>
              {galleryHours}
            </div>}
          </div>
          :
          false
        }
      </span>
    </div>
  )
}

DetailMapLocation.propTypes = {
  building: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  street: PropTypes.string,
  zip: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  galleryHours: PropTypes.array,
}
DetailMapLocation.defaultProps = {
}
export default DetailMapLocation
