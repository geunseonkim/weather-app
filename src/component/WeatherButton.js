import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, currentCity}) => {
    //console.log("cities?", cities);
  return (
    <div className="weather-button">
      <Button variant={`${setCity == "" ? "outline-warning" : "warning"}`} onClick={()=>currentCity("current")}>current location</Button>
     {cities.map((items, idx)=> (
        <Button key={idx} variant={`${setCity == cities ? "outline-warning" : "warning"}`} onClick={()=>setCity(items)}>{items}</Button>
     ))}
    </div>
  )
}

export default WeatherButton