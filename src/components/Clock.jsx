import React from 'react'
import {useState, useEffect} from 'react'
import {DateTime} from 'luxon'


const Clock = () => {
  const [date, setDate] = useState(new DateTime.local());

    const tick = () => {
      setDate(new DateTime.local());
    };
  
    useEffect(() => {
      tick();
    }, []); //To avoid infinite loop, you can add [] as 2nd param


    return (
      
      <div className="Clock">
        
        <h2>{date}</h2>
      </div>
    );
  

 
}

export default Clock



{/* <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
</Card> */}

// <div>
// <h1>Location Finder</h1>
// <p>Your public IP is: {ipAddress}</p>
// <p>Your location is: {city}, {location.region}, {location.country}</p>
// <p>Your local time is: {showTime} (UTC{location.timezone}) </p>
// <p>Time now in GMT: {showGmt} </p>
// <p>Your Internet Service Provider is: {isp}</p>

// <div>
// <img src={flagShow} style={{ height: "10vh", width: "15vw" }}/>
// </div>

// </div>