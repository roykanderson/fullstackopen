const CountryList = ({ results, setSearch }) => (
  <>
    {results.map(result =>
      <div key={result.name}>
        {result.name}
        <button onClick={() => setSearch(result.name)}>show</button>
      </div>
    )}
  </>
)

export default CountryList