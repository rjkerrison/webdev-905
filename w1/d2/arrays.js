// square brackets []

const names = ['Robin', 'Florian', 'Pauline']

function greetPerson(name) {
  console.log(`Hola, ${name}!`)
}

// Accessing from an array
console.log(names[1])
// arrays can be modified / are mutable
names[2] = 'Marco'

// We can add things like this
names[3] = 'Gary'
names[5] = 'Ibrahim'

console.log(names)
console.log(names.length)
console.log(names[4])

// Usually, we PUSH items onto the end
names.push('Abdou')
console.log(names)

// LOOPING

const aNames = []
// for-loop
for (let i = 0; i < names.length; i++) {
  if (names[i] && names[i].indexOf('a') !== -1) {
    aNames.push(names[i])
  }
}
console.log(aNames)

// forEach is for executing the
// same function for each of the items
aNames.forEach(function (item) {
  console.log(`'${item}' contains the letter 'a'`)
})

// Mapping is for creating new arrays from old ones
const newNames = aNames.map(function (item) {
  return item + item
})
console.log('newNames', newNames)

/* Manipulating items in an array
- push
- pop
- shift
- unshift
- splice
- slice
*/
console.log(57, newNames.push('HannahHannah'))
console.log(58, newNames)
console.log(59, newNames.pop()) // returns and removes last item
console.log(60, newNames)

console.log(62, newNames.shift()) // returns and removes first item
console.log(63, newNames)
console.log(64, newNames.unshift('PaulinePauline'))
console.log(65, newNames)

// Splice vs slice
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

console.log(alphabet.splice(5)) // returns and removes
console.log(alphabet)
console.log(alphabet.slice(2)) // returns
console.log(alphabet)

const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
console.log(alphabetLower.splice(3, 2)) // returns and removes 2
console.log(alphabetLower)
console.log(alphabetLower.slice(1, 3)) // returns
console.log('negative; counting from the right', alphabetLower.slice(1, -2))

// splice can also INSERT
console.log(alphabetLower)
console.log(alphabetLower.splice(1, 0, 'ADDED', 'ANOTHER ADDED')) // removes and inserts
console.log(alphabetLower)
// 'this one disappears' is ignored because it's in the wrong place and is treated like the number 0
console.log(alphabetLower.splice(1, 'this one disappears', 'this is added')) // removes and inserts
console.log(alphabetLower)

// splitting a string
const className = 'WebDev 905'
console.log(className.split(''))

console.log(className.split(' ')) // break into words
console.log(className.split('e'))

console.log('Robin, James, Kerrison'.split(', '))
console.log(alphabetLower.join(','))
