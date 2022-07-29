import Country from './Country'
import CountryList from "./CountryList"

const Results = ({ search, countries, setSearch }) => {

  // Filter countries by search
  const results = countries
    .filter(country => 
      country.name.toLowerCase().includes(search.toLowerCase())
    )

  // Search is empty
  if (search === '') {
    return (
      <div className="searchResults">
        <p>Search for a country.</p>
      </div>
    )
  }

  // Too many results
  else if (results.length > 10) {
    return (
      <div className="searchResults">
        <p>Too many results. Narrow your search.</p>
      </div>
    )
  }

  // 2-10 search results
  else if (results.length <= 10 && results.length > 1) {
    return (
      <div className="searchResults">
        <CountryList results={results} setSearch={setSearch} />
      </div>
    )
  }

  // 1 search result (match)
  else if (results.length === 1) {
    return (
      <div className='searchResults'>
        <Country country={results[0]} />
      </div>
    )
  }

  // No search results
  else {
    return (
      <div className="searchResults">
        <p>No countries match "{search}". Try a different search.</p>
      </div>
    )
  }
}

export default Results