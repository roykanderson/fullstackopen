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