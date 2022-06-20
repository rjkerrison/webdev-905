import React from 'react'

const RestaurantCard = ({
  name,
  address: { street, city, postcode },
  cuisine,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        {street}, {city} {postcode}
      </p>
      <p>
        {name} is a {cuisine} restaurant.
      </p>
    </div>
  )
}

export default RestaurantCard
