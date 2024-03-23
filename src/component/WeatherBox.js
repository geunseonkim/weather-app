import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather?", weather);
  return (
    <div className="weather-box">
      <div id="weatherInfo">{weather?.name}</div>
      <h2 id="weatherInfo">{weather?.main.temp}°C / {(weather?.main.temp*9/5)+32}°F</h2>
      <h3 id="weatherInfo">{weather?.weather[0].description}</h3>
      <h4 id="weatherInfo">Humidity: {weather?.main.humidity}%</h4>
    </div>
  )
}

export default WeatherBox