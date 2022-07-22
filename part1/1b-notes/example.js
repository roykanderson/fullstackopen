// arrow functions
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

const result = sum(1, 5)
console.log(result)

const square = p => p * p

const t = [1, 2, 3]
const tSqaured = t.map(p => p * p)

console.log(tSqaured)

// function keyword
function product(a, b) {
  return a * b
}

const result2 = product(2, 6)
console.log(result2)

// function expression
const average = function(a, b) {
  return (a + b) / 2
}

console.log(average(2, 5))

// Object methods and "this"

const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
  doAddition: function(a, b) {
    console.log(a + b)
  }
}

// Calling an object method
arto.greet()

// Methods can still be assigned after object is created
arto.growOlder = function() {
  this.age += 1
}

console.log(arto.age)
arto.growOlder()
console.log(arto.age)

// Store a reference to an object method, which can be used
arto.doAddition(1, 4)

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15)

// Storing a reference to an object method that uses "this" causes an issue
const referenceToGreet = arto.greet
referenceToGreet() // prints "hello, my name is undefined"

// If we lose track of the object the mthod is from, this
// references the global object
setTimeout(arto.greet, 1000)

// We can fix this using the bind method of the function
setTimeout(arto.greet.bind(arto), 1000)

// CLASSES
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()