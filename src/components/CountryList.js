import React from "react";
import Country from "./Country";

const CountryList = ({ countries }) => {
  const mappedCountries = countries.map((country, index) => (
    <Country country={country} key={index} />
  ));

  return(<>

  <div className="countries-container">
  <h2>Countries</h2>
  {mappedCountries}</div>;
  </>) 
};

export default CountryList;
