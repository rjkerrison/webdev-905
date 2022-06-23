import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

const authToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvYmluIiwiaWF0IjoxNjU1OTc2NzMxLCJleHAiOjE2NTU5NzczMzF9.kvGZc-cU78XiViIEQT71pgvW2-1A7SbJk_riLmuw7s0'

function App() {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    let config = {
      method: 'get',
      url: 'https://hangout-app.herokuapp.com/api/places?page=1&limit=10',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }

    axios(config)
      .then((response) => {
        setPlaces(response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className='App'>
      {places.map(({ name, address }) => (
        <p>
          {name}, {address}
        </p>
      ))}
    </div>
  )
}

export default App
