const Country = ({ country }) => (
  <>
    <h1>{country.name}</h1>
  </>
)

export default Country

/*
    <div>Capital: {country.capital}</div>
    <div>Area: {country.area}</div>
    <h2>Languages:</h2>
    <ul>
      {country.languages.map(language => (
        <li>{language}</li>
      ))}
    </ul>
    <img src="{country.flag}" alt="Flag of {country.name}" />
*/