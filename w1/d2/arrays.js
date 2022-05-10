// square brackets []

const names = ['Robin', 'Florian', 'Pauline']
console.log(names.length) // 3

function greetPerson(name) {
  console.log(`Hola, ${name}!`)
}

// Accessing from an array
console.log(names[0])
greetPerson(names[1])

// arrays can be modified / are mutable
names[0] = 'Valerian'
console.log(names)

// We can add things
names[3] = 'Begonia'
names[5] = 'Sebastian'
console.log(names[5], names[4], names[3], names[2])

// But usually, we PUSH items onto the end
names.push('Tzu Yu')
names.push('Haroun')
console.log(names)

// LOOPING
const aNames = []
// for-loop
for (let i = 0; i < names.length; i++) {
  if (names[i]) {
    // greet everyone using i as an indexer of names
    greetPerson(names[i])
  }

  // we are checking every name in names
  if (names[i] && names[i].indexOf('a') !== -1) {
    // if it contains an 'a', we store it in aNames
    aNames.push(names[i])
  }
}
console.log('names containing "a":', aNames)

// forEach is for executing the
// same function for each of the items
aNames.forEach(function (item) {
  console.log(`'${item}' contains the letter 'a'`)
})
// these two loops are equivalent
for (let i = 0; i < aNames.length; i++) {
  console.log(`'${aNames[i]}' contains the letter 'a'`)
}
for (let name of aNames) {
  console.log(`'${name}' contains the letter 'a'`)
}

// Mapping is for creating new arrays from old ones
const newNames = aNames.map(function (item) {
  return item + ' is ' + item + '!'
})
console.log('newNames', newNames)

// forEach and map are ARRAY METHODS
// this means that they are functions that operate on an array
// and we call them with arrayName.methodName()
const numbers = [4, 8, 15, 16, 23, 42]

// map creates a new array, but does not modify the original
numbers.map(function (item) {
  return item ** 2
})

// forEach executes a function for each item in the array, but does not modify the original
numbers.forEach(function (item) {
  return item ** 2
})

numbers.forEach(function (item) {
  console.log(item ** 2)
})
