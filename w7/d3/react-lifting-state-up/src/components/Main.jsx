import React from 'react'
import { useState } from 'react'

import FlowerList from './FlowerList'
import Sidebar from './Sidebar'

import './Main.css'

const Main = () => {
  const [cartItems, setCartItems] = useState([])

  // each cartItem has a name and a price
  const addItemToCart = ({ name, price }) => {
    // create a new array containing
    // all the current items and the new one
    setCartItems([...cartItems, { name, price }])
  }

  return (
    <main>
      <FlowerList addItemToCart={addItemToCart} />
      <Sidebar cartItems={cartItems} />
    </main>
  )
}

export default Main
