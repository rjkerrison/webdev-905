import React, { useState } from 'react'
import Input from './Input'

const formFields = [
  { name: 'name', label: 'Flower name', placeholder: 'e.g Daffodil' },
  { name: 'image', label: 'Image URL' },
  {
    name: 'price',
    label: 'Price',
    placeholder: 'you know what a price is',
    type: 'number',
  },
  { name: 'colour', label: 'Flower Colour', placeholder: 'e.g. Yellow' },
]

const AddFlowerFormAlt = ({ addFlower }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: 'https://www.fillmurray.com/200/200',
    price: 10,
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    // submission of form all happens here
    addFlower(formData)
  }

  return (
    <>
      <h2>Add a new flower</h2>
      <form action='#' onSubmit={handleSubmit}>
        {formFields.map((formFieldInfo) => (
          <Input
            {...formFieldInfo}
            formData={formData}
            setFormData={setFormData}
          />
        ))}
        <input type='submit' value='Add Flower' />
      </form>
    </>
  )
}

export default AddFlowerFormAlt
