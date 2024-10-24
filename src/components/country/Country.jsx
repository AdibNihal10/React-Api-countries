import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const { name, flags, area, population, cca3 } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: `${visited ? "purple" : "white"}` }}>
        Name: {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <h3>Population: {population}</h3>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Flags
      </button>
      <button onClick={() => handleVisitedCountries(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I Have visited" : "I need to visit"}
    </div>
  );
};

export default Country;
