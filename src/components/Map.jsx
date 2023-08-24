import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import FindIP from './FindIP'
import App from '../App'

const Map = () => {


  return (
    <MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. 
    </Popup>
  </Marker>
</MapContainer>
    

    //     <MapContainer center={[52.24977087237344, 8.069533289892675]} zoom={13}>
    //   <TileLayer
    //     attribution="Google Maps"
    //     url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
    //     maxZoom={20}
    //     subdomains={["mt0", "mt1", "mt2", "mt3"]}
    //   />
    //   <Marker
    //     position={[52.24977087237344, 8.069533289892675]}
    //     icon={customIcon}
    //   >
    //     <Popup>
    //       I'm here!
    //     </Popup>
    //   </Marker>
    // </MapContainer>
    
  )
}

export default Map


