import { useState, useEffect } from "react";

import CountryList from "../components/CountryList";
import VisitedCountryList from "../components/VistedCountryList";

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [visited, setVisited] = useState(false)






  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const jsonData = await response.json();
      jsonData.splice(47, 1);

      // Extract the desired data
      const extractedData = jsonData.map((country) => ({
        name: country.name.common,
        capital: country.capital,
        population: country.population,
        flagEmoji: country.flag,
        flagImg: country.flags.png,
        region: `${country.region} - ${country.subregion}`,

      }));

      setCountries(extractedData);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };




  useEffect(() => {
    console.log("loading data");
    fetchData();
  }, []);



  const moveCountryToVisited = (countryToMove) => {
    const updatedVisited = [countryToMove, ...visitedCountries];
    setVisitedCountries(updatedVisited);
    setCountries(countries.filter((country) => country.name !== countryToMove.name));
  };
  
  const moveCountryToAll = (countryToMove) => {
    const updatedAllCountries = [countryToMove, ...countries];
    setCountries(updatedAllCountries);
    setVisitedCountries(visitedCountries.filter((country) => country.name !== countryToMove.name));
  };
  

// const filterByName = (name) => {
//     setFiltered(true);
//     const filteredCountries = [];

//     countries.forEach((country) => {
//         if(country.name.toLowerCase().includes(name.toLowerCase())){
//             filteredCountries.push(country);
//         }
//     });
//     setFilteredCountries(filteredCountries);
// }


  return (<>

      
    <div className="country-container">

        <div className="column">
            {countries 
                ? <CountryList 
                countries={countries} 
                moveCountryToVisited={moveCountryToVisited}
                 />
                : <p>Loading...</p>  }
        </div>

        <div className="column">
            <VisitedCountryList 
            visitedCountries={visitedCountries}  
            moveCountryToAll={moveCountryToAll} />
        </div>
    </div>

    </>
  );
};

export default CountriesContainer;
