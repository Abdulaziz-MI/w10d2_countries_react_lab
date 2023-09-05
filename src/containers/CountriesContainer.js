import { useState, useEffect } from "react";
import Country from "../components/Country";
import CountryList from "../components/CountryList";

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);
  const [vistedCountries, setVisitedCountries] = useState([]);
  const [loading, setLoading] = useState(true);

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
        region: `${country.region} - ${country.subregion}`
      }));

      setCountries(extractedData);
      setLoading(false); // Data is now loaded
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false even on error
    }
  };

  useEffect(() => {
    console.log("loading data");
    fetchData();
  }, []);

  return (<>

      <h1> Countries</h1>
    <div className="country-container">
      {loading ? <p>Loading...</p> : <CountryList countries={countries} />}
    </div>
    </>
  );
};

export default CountriesContainer;
