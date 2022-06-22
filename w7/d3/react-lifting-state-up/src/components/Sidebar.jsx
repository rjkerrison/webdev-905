import React from 'react'
import Cart from './Cart'

// each cartItem has a name and a price
const Sidebar = ({ cartItems }) => {
  return (
    <div className='sidebar'>
      <h2>Cart</h2>
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default Sidebar
