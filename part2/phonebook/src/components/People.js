const People = ({ persons, filter }) => {
  return (
    <>
      {persons
        .filter(person => person.name.toLowerCase().includes(filter))
        .map(person => (
          <div key={person.id} style={{display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '1rem'}}>
            <div style={{textAlign: 'right'}}>{person.name}</div>
            <div style={{textAlign: 'left'}}>{person.number}</div>
          </div>
      ))}
    </>
  )
}

export default People