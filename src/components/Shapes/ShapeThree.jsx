import React from 'react'

function ShapeThree() {
  return (
    <div className="shapes shape3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 200 200"
      >
        <polyline
          style={{
            fill: 'none',
            stroke: '#211a00',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: '10',
          }}
          points="145.4,0.6 86.7,198.7 24.4,198.7 66.8,54 90.3,53.6 "
        />
      </svg>
    </div>
  )
}
export default ShapeThree
