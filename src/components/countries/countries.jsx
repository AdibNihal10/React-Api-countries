import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";

import "./country.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visited, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedFlags = (flags) => {
    console.log(flags);
    const newVisitedFlags = [...visitedFlags, flags];

    setVisitedFlags(newVisitedFlags);
  };

  const handleVisitedCountries = (country) => {
    console.log(country);
    const newVisitedCountries = [...visited, country];
    setVisitedCountries(newVisitedCountries);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h3>Messi: {countries.length}</h3>
      <div>
        <h5>Visited Countries:{visited.length} </h5>
        <ul>
          {visited.map((e) => (
            <li key={e.cca3}>{e.name.common}</li>
          ))}
          {visitedFlags.map((flags) => (
            <img key={flags.cca3} src={flags} alt="" />
          ))}
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
