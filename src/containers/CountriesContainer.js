import { useState, useEffect } from "react";
import CountryForm from "../components/CountryForm";
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
    // Check if the country is already in visitedCountries
    if (!visitedCountries.some((country) => country.name === countryToMove.name)) {
      // Remove the country from countries if it exists
      const updatedCountries = countries.filter(
        (country) => country.name !== countryToMove.name
      );
      setCountries(updatedCountries);
  
      // Add the country to visitedCountries
      const updatedVisited = [countryToMove, ...visitedCountries];
      setVisitedCountries(updatedVisited);
    }
  };
  
  
  
  const moveCountryToAll = (countryToMove) => {
    // Check if the country is already in countries
    if (!countries.some((country) => country.name === countryToMove.name)) {
      // Add the country to countries
      const updatedAllCountries = [countryToMove, ...countries];
      setCountries(updatedAllCountries);
    }
  
    // Remove the country from visitedCountries
    setVisitedCountries(
      visitedCountries.filter((country) => country.name !== countryToMove.name)
    );
  };
  
  

  const filterCountries = (name) => {
    // setFiltered(true);
  
    // Filter countries from both arrays
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(name.toLowerCase())
    );
  
    const filteredVisitedCountries = visitedCountries.filter((country) =>
      country.name.toLowerCase().includes(name.toLowerCase())
    );
  
    setFilteredCountries([...filteredCountries, ...filteredVisitedCountries]);
  };


  return (<>

<CountryForm filterCountries={filterCountries} />
      <div className="country-container">
        <div className="column">
          {filteredCountries.length > 0 ? (
            <CountryList
              countries={filteredCountries}
              moveCountryToVisited={moveCountryToVisited}
            />
          ) : (
            <CountryList
              countries={countries}
              moveCountryToVisited={moveCountryToVisited}
            />
          )}
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
