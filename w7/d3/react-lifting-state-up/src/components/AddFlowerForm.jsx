import React, { useState } from 'react'

const AddFlowerForm = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('http://fillmurray.com/200/200')
  const [price, setPrice] = useState(10)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <h2>Add a new flower</h2>
      <form action='#' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='e.g. Daffodil'
            value={name}
            onChange={(event) => {
              console.log('CHANGED', name, 'to', event.target.value)
              setName(event.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor='image'>Image URL</label>
          <input
            type='text'
            name='image'
            id='image'
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            name='price'
            id='price'
            placeholder='you know what a price is'
            value={price}
            onChange={(event) => setPrice(parseInt(event.target.value) || 0)}
          />
        </div>
        <input type='submit' value='Add Flower' />
      </form>
    </>
  )
}

export default AddFlowerForm
