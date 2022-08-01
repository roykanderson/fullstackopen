import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
  const [weather, setWeather] = useState(null)

  const lat = country.capitalInfo.latlng[0]
  const lon = country.capitalInfo.latlng[1]
  const api_key = process.env.REACT_APP_API_KEY
  console.log('key is', api_key)
  console.log('lat is', lat)

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${api_key}`)
      .then(response => setWeather(response.data))
  }, [lat, lon, api_key])

  console.log('weather is', weather)

  if (weather) {
    return (
      <div className="weatherInfo">
        <h1>Weather in {country.capital}</h1>
        <p>Temperature: {Math.round(weather.main.temp)}&deg;F</p>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather icon" />
        <p>{weather.weather[0].description}</p>
        <p>Wind: {weather.wind.speed} mph</p>
      </div>
    )
  }
  else {
    return (
      <div className='weatherInfo'>
        <h1>Weather info loading</h1>
      </div>
    )
  }
}

export default Weather