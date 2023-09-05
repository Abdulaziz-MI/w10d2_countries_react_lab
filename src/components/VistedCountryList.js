import Country from "./Country";
const VisitedCountryList = ({visitedCountries, moveCountryToAll}) => {
    
    const mappedVisitedCountries = visitedCountries.map((country) => (
      <Country
      country={country}
      key={country.name}
      checked={true} 
      moveCountryToAll={moveCountryToAll}
    />
      ));
    
      return(<>

      <div className="countries-container">
      <h2>Visited</h2>
        {mappedVisitedCountries}
      </div>;
      </>) 
    };


export default VisitedCountryList