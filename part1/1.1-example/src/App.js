const Hello = (props) => (
  <div>
    <p>Hello {props.name}, you are {props.age} years old</p>
  </div>
)

const Footer = () => (
  <div>
    greeting app created by Roy
  </div>
)

const App = () => {
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Footer />
    </>
  )
}

export default App