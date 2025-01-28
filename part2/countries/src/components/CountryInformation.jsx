const CountryInformation = ({ country }) => {
  console.log("this is the country", country);
  const languages = Object.values(country.languages);

  console.log(country.capitalInfo.latlng[0]);

  console.log("languages: ", languages);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <p>Capital: {country.capital}</p>
        <p> Area: {country.area}</p>
      </div>
      <h2>Languages</h2>
      <div>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      <div>
        <img src={country.flags.png} />
      </div>
      <div>
        <h2>Weather in {country.capital}</h2>
        Temperature: {} celcius
      </div>
    </div>
  );
};

export default CountryInformation;
