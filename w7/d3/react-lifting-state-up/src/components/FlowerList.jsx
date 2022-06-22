import React from 'react'

import AddFlowerForm from './AddFlowerForm'
import Flower from './Flower'

import flowers from './flowers.json'

const FlowerList = ({ addItemToCart }) => {
  return (
    <div className='flower-list'>
      <h2>Flowers!</h2>

      <ul>
        {flowers.map((flower) => (
          <li>
            <Flower {...flower} addItemToCart={addItemToCart} />
          </li>
        ))}
      </ul>

      <AddFlowerForm />
    </div>
  )
}

export default FlowerList
