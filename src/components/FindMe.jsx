import React from 'react'
import {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import "leaflet/dist/leaflet.css";





const FindMe = () => {
 const key = import.meta.env.VITE_SOME_KEY;
//  const url = `https://geo.ipify.org/api/v2/country?apiKey=${key}&ipAddress`
 const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${key}&ipAddress`


    const [ipAddress, setIpAddress] = useState("");
    const [location, setLocation] = useState("");
    const [isp, setIsp] = useState("");
    const [city, setCity] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    // const [position, setPosition] = useState([]);

    useEffect(() => {
      const fetchIp = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          
          setIpAddress(data.ip);
          setLocation(data.location);
          setIsp(data.isp);
          setCity(data.location.city)
          setLat(data.location.lat)
          setLng(data.location.lng)
        } catch (error) {
          console.error(error);
        }
      };
      fetchIp();

      
    }, []);
    // setPosition([data.location.lat, data.location.lng])
    const position = [`${lat}`, `${lng}`];

   

  return (

<div>
<h1>What Is My IP?</h1>
<p>My public IP s: {ipAddress}</p>
<p>My location is: {location.city}, {location.region}, {location.country}</p>
<p>My local timezone is: {location.timezone}</p>
<p>My Internet Service Provider is: {isp}</p>


<MapContainer center={position} zoom={1} scrollWheelZoom={true} style={{ height: "50vh", width: "50vw" }}>
    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Marker position={position}/>
    </MapContainer>




</div>

   
  )

}

export default FindMe