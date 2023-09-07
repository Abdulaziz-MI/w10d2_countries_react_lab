import React from "react";

const CountryForm = ({ filterCountries }) => {
  const handleInputChange = (e) => {
    filterCountries(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a country"
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
};

export default CountryForm;
