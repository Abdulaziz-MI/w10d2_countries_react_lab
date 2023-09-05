import React from "react";
import Country from "./Country";

const CountryList = ({ countries, moveCountryToVisited }) => {


    const mappedCountries = countries.map((country, index) => (
      <Country
      country={country}
      key={country.name}
      checked={false}
      moveCountryToVisited={moveCountryToVisited}
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
