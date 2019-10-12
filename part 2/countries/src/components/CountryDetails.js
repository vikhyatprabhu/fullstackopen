
import React, {useState} from "react";


const Country=({country})=>{

  
    
   let [weatherForCapital,setWeatherForCapital]=useState();
   console.log(weatherForCapital)

  return (
    <>
      <h1>{country.name} </h1>
      <br/>
      <p> capital {country.capital}</p>
      <p> population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {country.languages.map(
          language => <li key={language.name}>{language.name}</li>
        )}
      </ul>
      <img src={country.flag} alt="Flag" height="100" width="100"/>

    </>
  )
}

export default Country;
