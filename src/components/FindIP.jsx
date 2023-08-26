import React from 'react'
import {useState, useEffect} from 'react';
import "leaflet/dist/leaflet.css";
import { DateTime } from "luxon";
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion'
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import '../index.css'



const FindIP = () => {

  const key = import.meta.env.VITE_SOME_KEY;
  const url = `https://geo.ipify.org/api/v1?apiKey=${key}`
  
  
 

    const [ipAddress, setIpAddress] = useState("");
    const [location, setLocation] = useState("");
    const [isp, setIsp] = useState("");
  
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
          setLat(data.location.lat);
          setLng(data.location.lng);
          setIsp(data.isp);
        
        } 
        catch (error) {
          console.error(error);
        }
            
      };
      
      fetchIp()
    }, []);



  
    
    const locTime = DateTime.now();
    const showTime = locTime.toLocaleString(DateTime.DATETIME_MED);
    const gmt = DateTime.now().setZone("Etc/GMT-0");
    const showGmt= gmt.toLocaleString(DateTime.DATETIME_MED);
    
  


    const flagUrl = `https://flagcdn.com/w320/${location.country}.png`
    const flagShow = flagUrl.toLowerCase()

   

   

  return (
    
    <div>
     
      
      <div>
        <h1 className="title">Location Finder</h1>
      </div>

<Card className="cardstyle" style={{ width: '50rem' }}>
  <Card.Img variant="top" src={flagShow} />
    <Card.Body>

        

      <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>
    
              <Card.Title>{location.city}, {location.region}, {location.country}</Card.Title>          
    
            </Accordion.Header>
            <Accordion.Body>
              <div>
                <MapContainer center={position} zoom={4} scrollWheelZoom={true} style={{ height: "40rem", width: "40rem" }}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={position}/>
                </MapContainer>
              </div>
     
            </Accordion.Body>
          </Accordion.Item>
      </Accordion>
        <Card.Text>
          nothing
        </Card.Text>
  </Card.Body>



      <Card.Body>
          <ListGroup className="list-group-flush">
          
            <Card.Title>Your public IP is: </Card.Title>
            <ListGroup.Item>{ipAddress}</ListGroup.Item>
            <br/>
            <Card.Title>Your local time is:</Card.Title>
            <ListGroup.Item>{showTime} (UTC{location.timezone})</ListGroup.Item>
            <br/>
            <Card.Title>Time now in GMT:</Card.Title>
            <ListGroup.Item>{showGmt} (UTC+00:00)</ListGroup.Item>
            <br/>
            <Card.Title>Your Internet Service Provider is:</Card.Title>
            <ListGroup.Item>{isp}</ListGroup.Item>
          </ListGroup>
      </Card.Body>
</Card> 

</div>
  )

}

export default FindIP

