import React from 'react'
import AddToCart from './AddToCart'

import './Flower.css'

const Flower = ({ name, image, price, addItemToCart }) => {
  const addCurrentFlowerToCart = () => {
    // each cartItem has a name and a price
    addItemToCart({ name, price })
  }

  return (
    <div className='flower'>
      <h2>{name}</h2>
      <picture>
        <img src={image} alt={name} />
      </picture>
      <div className='cart-controls'>
        <div className='price'>{price} €</div>
        <AddToCart addToCart={addCurrentFlowerToCart} />
      </div>
    </div>
  )
}

export default Flower
