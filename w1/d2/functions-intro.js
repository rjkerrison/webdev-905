/* A function is:

- Container for some code
- Can execute that code
- Accept some data
- Can return / give back some data

A function is for:

- performing small, understandable tasks
- repeating operations

*/

// sayHello() will error here because className is not yet defined
const className = 'WebDev 905'
// this is okay – sayHello is hoisted
sayHello()
// function definition / function declaration / function statement

// function keyword followed by the name followed by brackets containing (empty) parameters
// followed by a code block (code wrapped in {})
function sayHello() {
  console.log(`Hello, ${className}!`)
}
sayHello()

// calling the function
// name of the function followed by brackets (parentheses)

// function expression
const sayExpression = function () {
  console.log('I am a function expression')
}
sayExpression()

// function expressions can allow us to change to which function a variable name points
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

// /*
// Let's look at these.

// - Accept some data ("arguments", "parameters")
// - Can return / give back some data ("return value of the function")
// */

// parameters and arguments are assigned by order
function multiply(a, b) {
  console.log('started the function')

  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Error: not numbers!', a, b)
    // this return is conditional – it won't always be hit
    return NaN
  }

  // a and b are the parameters
  return a * b
  // won't be executed - it's after the return!
  console.log('finished the function')
}
// 24 and 26 are the arguments,
// so this function call becomes 624 when we log it
console.log(multiply(24, 26))
const bigNumber = multiply(729, 1024)
console.log(bigNumber)
multiply('Robin', 'Paddington')

function playFizzbuzz(number) {
  // when number is divisible by 3, say "fizz"
  // when number is divisible by 5, say "buzz"
  // when number is divisible by 15, say "fizzbuzz"
  // otherwise say the number
  let result = number

  if (number % 15 === 0) {
    result = 'fizzbuzz'
  } else if (number % 3 === 0) {
    result = 'fizz'
  } else if (number % 5 === 0) {
    result = 'buzz'
  }

  return result
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
function calculateAnnualCosts() {
  const costsForBuildingMaintenance = getBuildingMaintenanceCosts()
  return costsForBuildingMaintenance
}
const calculateKnownIncome = () => {}
const findSpareMoney = () => {}
const saveToDatabase = () => {}

function getBuildingMaintenanceCosts() {}

function noReturnValue() {}

console.log('noReturnValue returns:', noReturnValue())
