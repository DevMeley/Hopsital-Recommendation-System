import React from 'react'

function Recommendations({recommend}) {
  return (
    <div>
        <div className="recommended">
          <p>Hospital Name: {recommend.name}</p>
          <p>Hospital Address: {recommend.full_address}</p>
          <p>services: {recommend.services}</p>
        </div>
    </div>
  )
}

export default Recommendations