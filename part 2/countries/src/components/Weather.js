import React from "react";

const Weather=(props)=>{
    if(props.weather !==null){
    return (
        <>
          <h1> Weather for </h1>
          <p> <b>temperature:</b> {props.weather.temperature} celsius</p>
          <img src={props.weather.weather_icons[0]} alt="weather icon"/>
          <p><b>wind:</b> {props.weather.wind_speed} kph direction {props.weather.wind_dir}</p>
        </>
        
    )} else {
        return null;
    }

}

export default Weather;