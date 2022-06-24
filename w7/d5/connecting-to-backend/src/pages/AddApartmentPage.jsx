import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddApartmentPage() {
  const [headline, setHeadline] = useState('')
  const [price, setPrice] = useState(1)
  const [validationMessage, setValidationMessage] = useState('')
  const [hasCreatedApartment, setHasCreatedApartment] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    // generic handleSubmit prevents the default
    event.preventDefault()

    if (headline.length < 8) {
      setValidationMessage(
        'Headline is too short, must be 8 characters or more'
      )
      return
    }

    if (price > 4000) {
      setValidationMessage('Maximum allowed price is 4000 € per night')
      return
    }

    // specifics of this form submission
    axios({
      method: 'POST',
      url: 'https://ironbnb-m3.herokuapp.com/apartments',
      data: {
        title: headline,
        pricePerDay: price,
        img: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/ironbnb-house.58.png',
      },
    }).then((response) => {
      console.log('response.data', response.data)

      // clear the form
      setHeadline('')
      setPrice(1)

      // tell the user about the success
      setHasCreatedApartment(true)

      navigate('/')
    })
  }

  return (
    <div className='AddApartmentPage'>
      <h3>Add New Apartment</h3>

      <form onSubmit={handleSubmit}>
        {/* HEADLINE */}
        <label>Title</label>
        <input
          type='text'
          name='headline'
          onChange={(e) => {
            setHeadline(e.target.value)
            // reset the success message
            setHasCreatedApartment(false)
          }}
          value={headline}
        />

        {/* PRICE */}
        <label>Price per Day</label>
        <input
          type='number'
          min={10}
          max={4000}
          name='pricePerDay'
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />

        <button type='submit'>Create Apartment</button>
      </form>

      {validationMessage && <p className='error'>{validationMessage}</p>}
      {hasCreatedApartment && (
        <p className='success'>Successfully created an apartment!</p>
      )}
    </div>
  )
}

export default AddApartmentPage
