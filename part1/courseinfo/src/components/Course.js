const Course = ({name, parts}) => {
  return (
    <>
      <Header size={2} name={name} />
      <Content parts={parts} />
      <Stat parts={parts} />
    </>
  )
}

const Header = ({size, name}) => {
  if (size === 1) {
    return <h1>{name}</h1>
  }
  else {
    return <h2>{name}</h2>
  }
}

const Content = ({parts}) => {
  return (
    <>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Stat = ({parts}) => {
  /*
  let exercises = 0
    for (let i = 0; i < parts.length; i++) {
      exercises += parts[i].exercises
    }*/
  const exercises = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  return (
    <p><strong>total of {exercises} exercises</strong></p>
  )
}

export default Course