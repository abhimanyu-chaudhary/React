import React, { useEffect, useState } from 'react'

function Weather() {
    const [weather, setWeather] = useState(null);
    const API = "eeb0a96d2cc5d60e60bc3f2e0adcb208";

    useEffect(() => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const lon = position.coords.longitude;
                const lat = position.coords.latitude;
                
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`)
                .then((response) => response.json())
                .then((data) => setWeather(data));

            })
        }
    })
  return (
    <div className=''>
        {weather ? 
            <div className=''>
                <h1 className='underline font-semibold'>Weather Forecast ☁</h1>
                <p>Temperature: {(weather.main.temp-273.15).toFixed(2)}</p>
                <p>Humidity: {weather.main.humidity}</p>
                <p>Pressure: {weather.main.pressure}</p>
            </div>
            :
            <div>
                Loading...
            </div>
        }
      
    </div>
  )
}

export default Weather;
