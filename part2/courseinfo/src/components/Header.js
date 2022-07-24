const Header = ({size, name}) => {
  if (size === 1) {
    return <h1>{name}</h1>
  }
  else {
    return <h2>{name}</h2>
  }
}

export default Header