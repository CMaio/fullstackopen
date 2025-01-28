import CountryInformation from "./CountryInformation";

const Display = ({ countryList, onCountrySelect, selectedCountry }) => {
  if (countryList === null) {
    return <div>Please write a country to know the information</div>;
  }

  if (countryList[0] === undefined) {
    return <div>There is no country with this name</div>;
  }

  if (countryList.length > 10) {
    return <div>Too many matches, specify another</div>;
  }

  if (selectedCountry) {
    return (
      <div>
        <CountryInformation country={selectedCountry} />
      </div>
    );
  }

  if (countryList.length > 1 && countryList.length < 10) {
    return (
      <div>
        <ul>
          {countryList.map((country) => (
            <li key={country.cca3}>
              {country.name.common}{" "}
              <button onClick={() => onCountrySelect(country)}>show</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (countryList.length === 1) {
    return (
      <div>
        <CountryInformation country={countryList[0]} />
      </div>
    );
  }
};

export default Display;
