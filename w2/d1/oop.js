// Object Oriented Programming

// OOP is all about basing our programming around Objects
// It's different from functional programming, where functions are most important

// Object methods help us DO things with Objects
const bike = {
  color: 'red',
  brand: 'Canondale',
  owner: 'Abdou',
  tyres: [
    { position: 'front', status: 'inflated' },
    {
      position: 'back',
      status: 'punctured',
      repair() {
        this.status = 'inflated'
      },
    },
  ],
  speedInKmph: 0,
  speedUp(increaseInSpeed) {
    this.speedInKmph += increaseInSpeed
  },
  // Object method syntax
  getDescription() {
    return `A ${this.color} ${this.brand} bike owned by ${this.owner}.`
  },
  // object property with a function expression
  slowDown: function (decreaseInSpeed) {
    this.speedInKmph -= decreaseInSpeed
  },
  // ARROW FUNCTIONS do not capture the meaning of "this"
  getOwnerName: () => {
    return this.owner
  },
}

console.log(bike.speedInKmph)
bike.speedUp(5)
console.log(bike.speedInKmph)
bike.speedUp(7)
console.log(bike.speedInKmph)
bike.slowDown(3)
console.log(bike.speedInKmph)

console.log(bike.getDescription())
console.log(bike.getOwnerName())

function callSomething(callback) {
  return callback()
}

callSomething(() => console.log('hello'))
// we're passing the function expression of getDescription
// but we lose the reference to the object itself
// this means that 'this' is not the bike
const result = callSomething(bike.getDescription)
console.log(result)

// Two ways to pass object methods as an argument
// WITHOUT losing the 'this' context

// a new function - easiest is to create an arrow
const result2 = callSomething(() => bike.getDescription())
console.log('arrow function', result2)

// create a bound function
const result3 = callSomething(bike.getDescription.bind(bike))
console.log('binding', result3)

console.log(this)

console.log(bike.tyres)
bike.tyres[1].repair()
console.log(bike.tyres)
