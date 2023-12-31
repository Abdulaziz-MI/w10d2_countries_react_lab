import React from "react";
import Country from "./Country";

const CountryList = ({ countries, moveCountryToVisited }) => {


    const mappedCountries = countries.map((country) => (
      <Country
      country={country}
      key={country.name}

      f={moveCountryToVisited}
    />
    ));
  
    return(<>
  
    <div className="countries-container">
    <h2>Countries</h2>
      {mappedCountries}
    </div>;
    </>) 
  };

export default CountryList;
