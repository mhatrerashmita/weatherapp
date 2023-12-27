import React, { useState } from 'react'
import './Weather.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon  from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon  from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'

const Weather = () => {
  let api_key="be14a59add7bcd9d154f442b7933b173";
  const [wicon,setwicon] =useState(cloud_icon)
  const search= async () =>{
        const element =document.getElementsByClassName('cityinput')
       
        if(element[0].value==="")
        {
          return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let response = await fetch(url)
        let data =  await response.json()
        const humidity =document.getElementsByClassName('humidity_per');
        const wind=document.getElementsByClassName('wind_rate');
        const temps =document.getElementsByClassName('weather-temp');
        const location =document.getElementsByClassName('weather-location');
        humidity[0].innerHTML= (data.main.humidity) +"%";
        wind[0].innerHTML=Math.floor(data.wind.speed )+"km/h";
        temps[0].innerHTML=Math.floor(data.main.temp )+"°C";
        location[0].innerHTML=data.name;
       
        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
               setwicon(clear_icon)
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        
        {
          setwicon(drizzle_icon)
   }
   else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        
        {
          setwicon(drizzle_icon)
   }
   else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        
        {
          setwicon(rain_icon)
   }
   else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        
        {
          setwicon(rain_icon)
   }
   else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        
        {
          setwicon(snow_icon)
   }
   else if(data.weather[0].icon==="0d" || data.weather[0].icon==="02n")
        
        {
          setwicon(cloud_icon)
   }
    
   else
   {
    setwicon(clear_icon)
   }


  }
  return (
    <div className="weather-container">
        <div className="search-bar">
            <input type="text" className='cityinput' placeholder="Enter a location"/>
            <button><img src={search_icon} alt="Search" onClick={()=>{search ()}}/></button>
        </div>
        <div className="weather-info">
            <img src={wicon} alt="Cloudy"/>
            </div>
            <div className='weather-temp'>24°C</div>
            <div className='weather-location'>london</div>
            <div className='data_container'>
            <div className='element'>
            <div className='data'>
              <img src={humidity_icon} alt=""   className='icon'/>
              <div className='humidity_per'>64%</div>
              <div className='text'>Humidity</div>
            </div>

            </div>
            <div className='element'>
            <div className='data'>
              <img src={wind_icon} alt="" className='icon' />
              <div className='wind_rate'>18 km/h</div>
              <div className='text'>wind speed</div>
            </div>

            </div>
            </div>
        </div>
  )
}

export default Weather;
