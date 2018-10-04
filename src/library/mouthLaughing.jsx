import React from 'react'

const MouthLaughing = (x = 0, y = 0) => (
  <svg x={x} y={y}>
    <path
      d="M36.7.4c-.4-.5-1.1-.4-1.9-.4H3.2c-.8 0-1.5-.1-1.9.4C-2.6 5.4 2 20 19 20S40.6 5.4 36.7.4"
      fill="#664e27"
    />
    <path
      d="M20.8 7.7c-.6 0-1.5.5-1.1 2 .2.7 1.2 1.6 1.2 2.8 0 2.4-3.8 2.4-3.8 0 0-1.2 1-2 1.2-2.8.3-1.4-.6-2-1.1-2-1.6 0-4.1 1.7-4.1 4.6 0 3.2 2.7 5.8 6 5.8s6-2.6 6-5.8c-.1-2.8-2.7-4.5-4.3-4.6"
      fill="#4c3526"
    />
    <path
      d="M11.3 16.7c2.2 1 4.8 1.5 7.7 1.5s5.5-.6 7.7-1.5C24.6 15.6 22 15 19 15s-5.6.6-7.7 1.7"
      fill="#ff717f"
    />
    <path d="M34 2H4.1C2 2 2 6 4 6h30c2 0 2-4 0-4" fill="#fff" />
  </svg>
)

MouthLaughing.args = ['x', 'y']

MouthLaughing.previewViewBox = '0 0 38 22'

export default MouthLaughing