import React from 'react'

const WeatherBox = ({weather}) => {
    // console.log("weather?", weather);
  return (
    <div className="weather-box">
      <h5 id="weatherInfo" className="city-deco">{weather?.name}</h5>
      <h2 id="weatherInfo" className="temp-deco">{weather?.main.temp}°C / {parseFloat(((weather?.main.temp*9/5)+32)).toFixed(2)}°F</h2>
      <h4 id="weatherInfo">{weather?.weather[0].description}</h4>
      <h4 id="weatherInfo">Humidity: {weather?.main.humidity}%</h4>
    </div>
  )
}

export default WeatherBox