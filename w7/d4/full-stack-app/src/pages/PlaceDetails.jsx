import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Map from '../components/Map'

const authToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvYmluIiwiaWF0IjoxNjU1OTc2NzMxLCJleHAiOjE2NTU5NzczMzF9.kvGZc-cU78XiViIEQT71pgvW2-1A7SbJk_riLmuw7s0'

const PlaceDetails = () => {
  const [placeInfo, setPlaceInfo] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  // We want to get the id from the URL parameters
  const params = useParams()

  useEffect(() => {
    let config = {
      method: 'get',
      url: `https://hangout-app.herokuapp.com/api/places/fetchId/${params.placeId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }

    axios(config)
      .then((response) => {
        if (!response.data) {
          setErrorMessage('API returned no data')
        } else {
          setPlaceInfo(response.data)
        }
      })
      .catch((error) => {
        setErrorMessage('Could not get info')
      })
  }, [params.placeId])

  if (errorMessage) {
    return (
      <>
        <h1>Error</h1>
        <p>{errorMessage}</p>
      </>
    )
  }

  if (!placeInfo) {
    return <h1>Loading place info…</h1>
  }

  return (
    <>
      <h1>Place Details!</h1>
      <div className='place-card'>
        <h3>{placeInfo.name}</h3>
        <p>
          {placeInfo.typology} at {placeInfo.address}
        </p>
      </div>
      {placeInfo.geometry && <Map position={placeInfo.geometry.coordinates} />}
    </>
  )
}

export default PlaceDetails
