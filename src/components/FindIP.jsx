import React from 'react'
import {useState, useEffect} from "react"




const FindIP = () => {
 const key = import.meta.env.VITE_SOME_KEY;
 const url = `https://geo.ipify.org/api/v2/country?apiKey=${key}&ipAddress`


    const [ipAddress, setIpAddress] = useState("");
    const [location, setLocation] = useState("");
    const [isp, setIsp] = useState("");

    useEffect(() => {
      const fetchIp = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setIpAddress(data.ip);
          setLocation(data.location);
          setIsp(data.isp);
        } catch (error) {
          console.error(error);
        }
      };
      fetchIp();
    }, []);
   


  return (
    <div>
<h1>What Is My IP?</h1>
<p>My public IP s: {ipAddress}</p>
<p>My IP location is: {location.region}, {location.country}</p>
<p>My local timezone is: {location.timezone}</p>
<p>My Internet Service Provider is: {isp}</p>
</div>
    
  )
}

export default FindIP