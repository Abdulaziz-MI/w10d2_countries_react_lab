
import React, { useState } from "react";

const Country = ({ country, moveCountryToVisited, moveCountryToAll  }) => {


    const [checked, setChecked] = useState()

    const handleCheck = () => {
        setChecked(!checked);
        if(!checked){
            moveCountryToVisited(country);
            setChecked(false);
        } else{
            moveCountryToAll(country);
            setChecked(true);
        }
    }



  return (
    <div className="country">
      <h3>{country.name} {country.flagEmoji} 
      
      <input type="checkbox"
      onChange={handleCheck} checked={checked} />

    </h3>
      <p>Capital: {country.capital} </p>
      <p>Region: {country.region} </p>
      <p>Population: {country.population} </p>
      <img src={country.flagImg} ></img>

    </div>
  );
};

export default Country;