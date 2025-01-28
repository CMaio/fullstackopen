import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Display from "./components/Display";
import countriesService from "./services/countries";

const App = () => {
  const [countries, setCountries] = useState(null);
  const [searchingName, setSearchingName] = useState("");
  const [countryList, setCountryList] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countriesService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const handleNewSearch = (event) => {
    setSearchingName(event.target.value);
    setSelectedCountry(null);
    if (event.target.value.length == 0) {
      console.log("empty", event.target.value.length);
      setCountryList(null);
    } else {
      if (countries) {
        let similarOptions = countries.reduce(function (
          filteredCountries,
          country
        ) {
          if (
            country.name.common
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
          ) {
            filteredCountries.push(country);
          }
          return filteredCountries;
        },
        []);
        setCountryList(similarOptions);
      }
    }
  };

  const handleCountrySelect = (country) => {
    console.log("new country ", country);
    setSearchingName(country.name.common);
    setSelectedCountry(country);
  };

  return (
    <div>
      <Filter filterName={searchingName} handleNewFilter={handleNewSearch} />
      <Display
        countryList={countryList}
        onCountrySelect={handleCountrySelect}
        selectedCountry={selectedCountry}
      />
    </div>
  );
};

export default App;
