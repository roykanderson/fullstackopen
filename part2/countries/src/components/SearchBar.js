const SearchBar = ({ search, setSearch }) => {
  
  const handleSearchChange = (event) => setSearch(event.target.value)

  return (
    <div className="searchBar">
      <p>Find a country: <input type="text" value={search} onChange={handleSearchChange} /></p>
    </div>
  )
}

export default SearchBar