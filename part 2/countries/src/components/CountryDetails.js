import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from './Weather'

const Country = ({ country }) => {
  useEffect(() => {
    axios
      .get(
        "http://api.weatherstack.com/current?access_key=" +
          process.env.REACT_APP_API_KEY +
          "&query=" +
          country.capital
      )
      .then(response => {
        setWeatherForCapital(response.data.current);
      });
  }, [country]);

  let [weatherForCapital, setWeatherForCapital] = useState(null);
  return (
    <>
      <h1>{country.name} </h1>
      <br />
      <p> capital {country.capital}</p>
      <p> population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {country.languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="Flag" height="100" width="100" />
      <Weather weather={weatherForCapital}  />
    </>
  );
};

export default Country;
