import { useState, useEffect } from 'react'
import axios from 'axios'

import SearchBar from './components/SearchBar'
import Results from './components/Results'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <Results search={search} countries={countries} setSearch={setSearch} />
    </div>
  )
}

export default App