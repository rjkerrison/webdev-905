import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Map.css'

const Map = ({ position: [lat, long] }) => {
  return (
    <MapContainer center={[long, lat]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[long, lat]}>
        <Popup>Here it is!</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
