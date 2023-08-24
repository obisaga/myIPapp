import React from 'react'
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import "leaflet/dist/leaflet.css";




const Map = () => {


const position = [52.24977087237344, 8.069533289892675];

  return (
    <div>
    <MapContainer center={position} zoom={10} scrollWheelZoom={true} style={{ height: "50vh", width: "50vw" }}>
    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Marker position={position}/>
    </MapContainer>
    
    </div>
    
    
  )
}

export default Map


