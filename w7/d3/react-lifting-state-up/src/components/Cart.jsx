import React from 'react'

// each cartItem has a name and a price
const Cart = ({ cartItems }) => {
  return (
    <ul>
      {cartItems.map((item) => (
        <li>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </li>
      ))}
    </ul>
  )
}

export default Cart
