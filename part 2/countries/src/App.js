import React, { useState, useEffect } from "react";
import Country from "./components/CountryDetails";
import SearchFilter from "./components/SearchFilter";

import axios from "axios";

const App = () => {
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => setCountries(response.data));
  }, []);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [filterText, setFilterText] = useState("");

  console.log(countries);

  const handleFilterTextChange = event => {
    setFilterText(event.target.value);
    setSelectedCountry(null)
  };

  const handleButtonClick = country => {
    setSelectedCountry(country);
  };

  let filteredList = [];
  if (filterText.length > 0) {
    filteredList = countries.filter(country =>
      country.name.includes(filterText)
    );
  }
  let countriesToDisplay = <p>Too many matches, specify another filter</p>;
  if (filteredList.length <= 10) {
    if (filteredList.length === 1) {
      countriesToDisplay = <Country country={filteredList[0]} />;
    } else if (selectedCountry) {
      countriesToDisplay = <Country country={selectedCountry} />;
    } else {
      countriesToDisplay = filteredList.map(country => (
        <div key={country.name}>
          <p> {country.name}</p>
          <button onClick={() => handleButtonClick(country)}> show</button>
        </div>
      ));
    }
  }

  return (
    <div>
      <SearchFilter
        filterText={filterText}
        handleFilterTextChange={handleFilterTextChange}
      />
      {countriesToDisplay}
    </div>
  );
};

export default App;
