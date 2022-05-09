// NUMBER

let age = 28
const earsCount = 2
// floating-point numbers (decimals)
const heightInMetres = 1.73

console.log(age + 2) // 30
console.log(earsCount - 1) // 1
console.log(heightInMetres * 2) // 3.46
console.log(heightInMetres / 10) // 0.173

console.log(3.14159265358979323846) // 3.14159265358979323846
console.log(Math.PI) // pi, but as a number
console.log(0.000000000000000000000000001234234) // 0.000000000000000000000000001234234

console.log(0.1 + 0.2) // 0.3

// Floats and equality

console.log('Robin' === 'Robin')
console.log('Robin' === 'Florian')
console.log(1 + 2 === 3)

const pointThree = 0.1 + 0.2
const result = pointThree.toFixed(2)
console.log(pointThree, result, result === '0.3')

const expectedResult = 0.3
console.log(pointThree - 0.00001 < expectedResult) // true
console.log(pointThree + 0.00001 > expectedResult) // true
// because they are both true, it means 0.3 is very close to pointThree

console.log(5 * 9) // 45
console.log(2 ** 10) // 1024
console.log(3 ** 2) // 9

console.log('50 % 7', 50 % 7) // 1 — because 50 is 1 more than a multiple of 7
console.log('200 % 17', 200 % 17) // 13

age += 2 // addition assignment operator
console.log(age) // 30

// age = age * 5
age *= 5 // multiplication assignment operator
console.log(age) // 150

age /= 30 // division assignment age = 150 / 30 = 5
console.log(age) // 5

age -= 4 // subtraction assignment
console.log(age) // 1

let something = 178
something %= 17
console.log('something %= 17', something)

// order of operations follows PEMDAS
// Parentheses
// Exponent / power
// Multiplication
// Division / modulo/rest/remainder
// Addition
// Subtraction
console.log(2 + 2 - (((2 * 2) / 2) % 2))
