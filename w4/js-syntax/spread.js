// SPREAD operator
// gather anything we've missed
const bear = {
  id: 3,
  name: 'Paddington',
  favouriteFood: 'marmalade',
  family: {
    adoptedMother: 'Mrs Brown',
    adoptedFather: 'Mr Brown',
    adoptedSister: 'Lucy',
    adoptedBrother: 'No idea',
  },
}

// ... means gathering what's left over
// "rest" params/ "rest" syntax / "le reste"
const { favouriteFood, ...otherBearInfo } = bear

console.log('favouriteFood', favouriteFood)
console.log('otherBearInfo', otherBearInfo)

// "rest" params, because I am grab the rest of the params/fields
function getDetails({ id, ...additionalInfo }) {
  console.log('Searching by id', id)
  console.log('Additional info provided', additionalInfo)
}

// spread operator
// SPREADING THE BEAR into the new object

// BEAR overrides id
// but name overrides BEAR
getDetails({ id: 4, ...bear, name: 'Winnie' })
// id overrides BEAR
getDetails({ ...bear, id: 4 })

// ARRAYS

const numbers = [4, 8, 15, 16, 23, 42]
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

// rest/spread syntax for arrays
const [firstFibo, secondFibo, ...restOfFibo] = fibonacci

console.log({ firstFibo, secondFibo, restOfFibo })

const numbersAndFibo = [...numbers, ...fibonacci]
console.log({ numbersAndFibo })

// SHALLOW COPY
// created a new array with all the same values
const numbersCopy = [...numbers]
console.log({ numbers, numbersCopy })
numbersCopy[5] = 108
console.log({ numbers, numbersCopy })

// DEEP COPY is needed when we have an array of objects
const arrayOfArrays = [numbers, numbersCopy, numbersAndFibo]
// all the arrays in shallowCopy are references to the same arrays as in arrayOfArrays
const shallowCopy = [...arrayOfArrays]
shallowCopy[0][1] = 123456789
console.log(arrayOfArrays[0][1])

// easy new deep copy
const deepCopy = structuredClone(arrayOfArrays)

// weird hacky old deep copy
const jsonString = JSON.stringify(arrayOfArrays)
console.log({ jsonString })
console.log(JSON.parse(jsonString))

// spreading arguments means gathering them in an array
function takesLoadsOfArguments(name, favouriteNumber, ...numbers) {
  console.log(
    name,
    'loves the number',
    favouriteNumber,
    'and likes the numbers:',
    numbers
  )
}

takesLoadsOfArguments('Bénédicte', 4, 12, 13, 5, 8, 9, 10, 11)

// spread an array into the arguments
console.log({ max: Math.max(...numbersAndFibo) })

// spread params/rest params are useful for looping
function sayHelloInALoop(greeting, ...names) {
  names.forEach((name) => {
    console.log(`${greeting}, ${name}!`)
  })
}

sayHelloInALoop('Buongiorno', 'Pierre', 'Romain', 'Stephane')
