import React from 'react'
import {useState, useEffect} from 'react';
// import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { DateTime } from "luxon";




const FindIP = () => {


 const key = import.meta.env.VITE_SOME_KEY;
 const url = `https://geo.ipify.org/api/v2/country?apiKey=${key}&ipAddress`
//  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${key}&ipAddress`
    

    const [ipAddress, setIpAddress] = useState("");
    const [location, setLocation] = useState("");
    const [isp, setIsp] = useState("");
    const [city, setCity] = useState("");
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const position = [`${lat}`, `${lng}`];

    
    useEffect(() => {
      const fetchIp = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          
          
          setIpAddress(data.ip);
          setLocation(data.location);
          setIsp(data.isp);
          setCity(data.location.city);
          setLat(data.location.lat);
          setLng(data.location.lng);
          
     
          

        } 
        catch (error) {
          console.error(error);
        }
            
      };
      
      fetchIp();    
    }, []);



   

    // const [time, setTime] = useState(new Date().toLocaleTimeString());
    
    // useEffect(() => {
      
    //   const interval = setInterval(() => {
    //     let newTime = new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();
    //     setTime((prev) => newTime);

    //   }, 1000);
    
    //   return () => clearInterval(interval);
    // }, []);

    
    const locTime = DateTime.now();
    const showTime = locTime.toLocaleString(DateTime.DATETIME_MED);
    const gmt = DateTime.now().setZone("Etc/GMT-0");
    const showGmt= gmt.toLocaleString(DateTime.DATETIME_MED);
    
  


    const flagUrl = `https://flagcdn.com/w320/${location.country}.png`
    const flagShow = flagUrl.toLowerCase()

   

   

  return (

<div>
<h1>Location Finder</h1>
<p>Your public IP is: {ipAddress}</p>
<p>Your location is: {city}, {location.region}, {location.country}</p>
<p>Your local time is: {showTime} (UTC{location.timezone}) </p>
<p>Time now in GMT: {showGmt} </p>
<p>Your Internet Service Provider is: {isp}</p>
<div>
<img src={flagShow} style={{ height: "10vh", width: "15vw" }}/>
</div>






</div>

   
  )

}

export default FindIP



// var txt = `${location.timezone}`;
// var numb = txt.match(/\d/g);
// numb = numb.join("");
// console.log(numb);
