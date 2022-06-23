import { Link } from 'react-router-dom'
import './PlaceCard.scss'

const PlaceCard = ({ name, address, typology, _id }) => {
  return (
    <div className='place-card'>
      <h3>{name}</h3>
      <p>
        {typology} à {address}
      </p>
      <p>
        Found out more about <Link to={`/places/${_id}`}>{name}</Link>!
      </p>
    </div>
  )
}

export default PlaceCard
