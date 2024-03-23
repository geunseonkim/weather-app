import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities}) => {
    console.log("cities?", cities);
  return (
    <div className="weather-button">
      <Button variant="warning">현재 위치</Button>
     {cities.map((items) => (
        <Button variant="warning">{items}</Button>
     ))}
    </div>
  )
}

export default WeatherButton
