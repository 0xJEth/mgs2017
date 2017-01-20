import React from 'react'

function ShapeOne() {
  return (
    <div className="shapes shape1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 200 200"
      >
        <g>
          <path
            style={{
              fill: 'none',
              stroke: '#211a00',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: '10',
            }}
            d="M139.8,120.7c8.2-9.5,22.6-10.6,32.1-2.4c1.2,1,2.2,2.1,3.1,3.3V66.9c-21.2-7-45.5-1.2-61,16.8 c-8.2,9.5-22.6,10.6-32.1,2.4c-1.4-1.2-2.5-2.5-3.5-3.8l-0.2,55.1C99.5,144.7,124.1,138.9,139.8,120.7z"
          />
        </g>
      </svg>
    </div>
  )
}
export default ShapeOne
