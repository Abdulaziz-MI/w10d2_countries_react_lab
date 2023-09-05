import React from "react";

const Country = ({ country }) => {



  return (
    <div className="country">
      <h3>{country.name} {country.flagEmoji}</h3>
      <p>Capital: {country.capital} </p>
      <p>Region: {country.region} </p>
      <p>Population: {country.population} </p>
      <img src={country.flagImg} ></img>
    </div>
  );
};

export default Country;