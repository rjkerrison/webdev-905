import React from 'react'
import { useState } from 'react'

import AddFlowerForm from './AddFlowerForm'
import AddFlowerFormAlt from './AddFlowerFormAlt'
import Flower from './Flower'

import flowersFromJson from './flowers.json'
import './FlowerList.css'

const FlowerList = ({ addItemToCart }) => {
  const [flowers, setFlowers] = useState(flowersFromJson)

  const addFlower = (newFlower) => {
    // add it to the list of flowers
    setFlowers([...flowers, newFlower])
  }

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

      <AddFlowerFormAlt addFlower={addFlower} />
    </div>
  )
}

export default FlowerList
