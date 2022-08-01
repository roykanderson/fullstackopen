import Weather from './Weather'

const Country = ({ country }) => {
  return (
    <>
      <div className="countryInfo">
        <h1>{country.name.common}</h1>
        <div>Capital: {country.capital[0]}</div>
        <div>Area: {country.area}</div>
        <h2>Languages:</h2>
        <ul>
          {Object.keys(country.languages).map(key => (
            <li key={key}>{country.languages[key]}</li>
          ))}
        </ul>
        <img src={`${country.flags.png}`} alt={`Flag of ${country.name.common}`} />
      </div>
      <Weather country={country}/>
    </>
  )
}

export default Country