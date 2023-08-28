import React from 'react'
import {useState, useEffect} from 'react';
import "leaflet/dist/leaflet.css";
import { DateTime } from "luxon";
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import '../index.css'



const FindIP = () => {

  const key = import.meta.env.VITE_SOME_KEY;
  const url = `https://geo.ipify.org/api/v1?apiKey=${key}`
  
  
 

    const [ipAddress, setIpAddress] = useState("");
    const [location, setLocation] = useState("");
    const [isp, setIsp] = useState("");
  
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const position = [lat, lng];

    
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



    let locTime = DateTime.now();
    let showTime = locTime.toLocaleString(DateTime.DATETIME_MED);
    let gmt = DateTime.now().setZone("Etc/GMT-0");
    let showGmt= gmt.toLocaleString(DateTime.DATETIME_MED);
    

    // const [time, setTime] = useState(new showTime);
    
    // useEffect(() => {
      
    //   const interval = setInterval(() => {
    //     let newTime = new showTime;
    //     setTime((prev) => newTime);
    //     console.log(newTime)

    //   }, 1000);
    
    //   return () => clearInterval(interval);
    // }, []);
    


    const flagUrl = `https://flagcdn.com/w320/${location.country}.png`
    const flagShow = flagUrl.toLowerCase()

   
console.log(position)
   

  return (
    
    <div>
     
      
      <div>
        <h1 className="title">Location Finder</h1>
      </div>

<Card className="cardstyle" style={{ width: '70rem' }}>
  <Card.Img className="imgstyle" variant="top" src={flagShow} style={{ width: '50rem' }}/>
    <Card.Body>

        
    {lat !== 0 && lng !== 0 ? (
<>
        <MapContainer center={[lat, lng]} zoom={4} scrollWheelZoom={true} style={{ height: "40rem", width: "60rem" }}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[lat, lng]}>
                    <Popup>
                      You are here!
                    </Popup>
                  </Marker>
                </MapContainer>


      <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header className="accoHead">
    
              <Card.Title className="locationtext">
                <p>{location.city}, {location.region}, {location.country}</p></Card.Title>          
    
            </Accordion.Header>
            <Accordion.Body>
              <div>
                  
           
                

              </div>
     
            </Accordion.Body>
          </Accordion.Item>
      </Accordion>
      </>
) : null}
        <Card.Text>
        </Card.Text>
  </Card.Body>



      <Card.Body>
          <ListGroup className="list-group-flush">
          
            <Card.Title className="cardtitle">Your public IP is: </Card.Title>
            <ListGroup.Item>{ipAddress}</ListGroup.Item>
            <br/>
            <Card.Title className="cardtitle">Your local time is:</Card.Title>
            <ListGroup.Item>{showTime} (UTC{location.timezone})</ListGroup.Item>
            <br/>
            <Card.Title className="cardtitle">Time now in GMT:</Card.Title>
            <ListGroup.Item>{showGmt} (UTC+00:00)</ListGroup.Item>
            <br/>
            <Card.Title className="cardtitle">Your Internet Service Provider is:</Card.Title>
            <ListGroup.Item>{isp}</ListGroup.Item>
          </ListGroup>
      </Card.Body>
</Card> 

</div>
  )

}

export default FindIP

