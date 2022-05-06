/* A function is:

- Container for some code
- Can execute that code
- Accept some data
- Can return / give back some data

A function is for:

- performing small, understandable tasks
- repeating operations

*/

// function definition / function declaration / function statement
function sayHello() {
  console.log('Hello!')
}

sayHello()
sayHello()

// function expression
const sayExpression = function () {
  console.log('I am a function expression')
}
sayExpression()

let sayGreeting = function () {
  console.log('Bonjour')
}
sayGreeting()

sayGreeting = function () {
  console.log('Ciao')
}
sayGreeting()

// arrow functions / arrow expression
const sayAreet = () => {
  console.log('Areet!')
}
sayAreet()

/*
Let's look at these.

- Accept some data ("arguments", "parameters")
- Can return / give back some data ("return value of the function")
*/

// parameters and arguments are assigned by order
function multiply(a, b) {
  // a and b are the parameter
  console.log(arguments)
  return a * b
}
// 24 and 26 are the arguments
console.log(multiply(24, 26, 'another argument?'))

function playFizzbuzz(number) {
  // when number is divisible by 3, say "fizz"
  // when number is divisible by 5, say "buzz"
  // when number is divisible by 15, say "fizzbuzz"
  // otherwise say the number
  if (number % 15 === 0) {
    return 'fizzbuzz'
  }
  if (number % 3 === 0) {
    return 'fizz'
  } else if (number % 5 === 0) {
    return 'buzz'
  }
  // console.log(number, 'line 69')
  return number
}

for (let i = 1; i < 20; i++) {
  console.log(playFizzbuzz(i))
}

// functions are for organising/structuring our code
// they help keep things simple
function calculateAnnualBudget() {
  const costs = calculateAnnualCosts()
  const knownIncome = calculateKnownIncome()
  const spareMoney = findSpareMoney(costs, knownIncome)
  saveToDatabase(spareMoney)
}

// TODO - fill these later
function calculateAnnualCosts() {}
const calculateKnownIncome = () => {}
const findSpareMoney = () => {}
const saveToDatabase = () => {}
