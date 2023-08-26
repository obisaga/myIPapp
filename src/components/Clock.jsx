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

