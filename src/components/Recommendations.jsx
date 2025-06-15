import React from 'react'

function Recommendations({recommend}) {
  return (
    <div>
        <div className="recommended">
          <h3>Recommendation</h3>
          <p>Hospital Name: {recommend.name}</p>
          <p>Hospital Address: {recommend.full_address}</p>
          <p>services: {recommend.services}</p>
        </div>
    </div>
  )
}

export default Recommendations