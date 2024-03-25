import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, currentCity}) => {
    //console.log("cities?", cities);
  return (
    <div className="weather-button">
      <Button variant={`${setCity == null? "danger" : "warning"}`} onClick={()=>currentCity("current")}>current location</Button>
     {cities.map((items, idx)=> (
        <Button variant={`${setCity == items? "light" : "warning"}`} key={idx} onClick={()=>setCity(items)}>{items}</Button>
     ))}
    </div>
  )
}

export default WeatherButton