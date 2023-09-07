const Country = ({ country, f  }) => {


    const handleClick = () => {
        f(country)
    }



  return (
    <div className="country">
      <h3>{country.name} {country.flagEmoji} 
       
      <input type="checkbox" onClick={handleClick}/>

    </h3>
      <p>Capital: {country.capital} </p>
      <p>Region: {country.region} </p>
      <p>Population: {country.population} </p>
      <img src={country.flagImg} ></img>

    </div>
  );
};

export default Country;