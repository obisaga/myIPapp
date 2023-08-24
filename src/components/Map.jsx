import React from 'react'
import { MapContainer, TileLayer, Marker} from 'react-leaflet'



const Map = () => {
    

  return (
    <MapContainer 
    center={[52.24977087237344, 8.069533289892675]} zoom={10} scrollWheelZoom={false}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
        <Marker 
        position={[52.24977087237344, 8.069533289892675]}/>
    </MapContainer>
    
    
  )
}

export default Map


