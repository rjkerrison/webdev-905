import React from 'react'

import './PlaceCard.scss'

const PlaceCard = ({ name, address, typology, _id }) => {
  return (
    <div className='place-card'>
      <h3>{name}</h3>
      <p>
        {typology} à {address}
      </p>
      <p>id: {_id}</p>
    </div>
  )
}

export default PlaceCard
