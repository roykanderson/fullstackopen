const CountryList = ({ results, setSearch }) => (
  <div className="countryInfo">
    {results.map(result =>
      <div key={result.name.common}>
        {result.name.common}
        <button onClick={() => setSearch(result.name.common)}>show</button>
      </div>
    )}
  </div>
)

export default CountryList