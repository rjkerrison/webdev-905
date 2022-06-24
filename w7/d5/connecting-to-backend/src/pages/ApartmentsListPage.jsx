import { useState, useEffect } from 'react' // <== IMPORT useEffect
import axios from 'axios' // <== IMPORT axios

function ApartmentsPage() {
  // apartments starts as an empty array
  // when we GET the data from the backend,
  // we can "setApartments(that data)"
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    // All of our axios calls have to be in a useEffect
    // or in a event handler, because we do not want
    // to call the API every render / we only want to
    // call the API during a mount, or an update
    axios
      .get('https://ironbnb-m3.herokuapp.com/apartments')
      .then((response) => {
        console.log('response.data', response.data)
        setApartments(response.data)
      })
  }, []) // <- [] means: Run the effect only once, after initial render

  return (
    <div>
      <h3>List of apartments</h3>

      {apartments.map((apartment) => (
        <div key={apartment._id} className='card'>
          <img src={apartment.img} alt='apartment' />
          <h3>{apartment.title}</h3>
          <p>Price: {apartment.pricePerDay}</p>
        </div>
      ))}
    </div>
  )
}

export default ApartmentsPage
