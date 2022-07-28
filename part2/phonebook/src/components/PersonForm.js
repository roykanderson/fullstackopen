const PersonForm = ({ 
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  persons,
  setPersons
}) => {
  
  const handleNameChange = (event) => setNewName(event.target.value)
  
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const submitPerson = (event) => {

    event.preventDefault()

    const newPerson = { 
      name: newName, 
      number: newNumber,
      id: 1 + persons.reduce((result, item) => {
        return item.id > result
          ? item.id
          : result
      }, 1)
    }

    // alert if person is already saved, otherwise add to phonebook
    0 < persons.filter((person) => person.name === newPerson.name || person.number === newPerson.number).length
      ? alert(`${newPerson.name} (${newPerson.number}) is already added to the phonebook`)
      : setPersons(persons.concat(newPerson))

    clearForm()
  }

  const clearForm = () => {
    setNewName('')
    setNewNumber('')
  }

  return (
    <form onSubmit={submitPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default PersonForm