// NUMBER

let age = 28
const earsCount = 2
// floating-point numbers (decimals)
const heightInMetres = 1.73

console.log(age + 2)
console.log(earsCount - 1)
console.log(heightInMetres * 2)
console.log(heightInMetres / 10)

console.log(3.14159265358979323846)
console.log(Math.PI)
console.log(0.000000000000000000000000001234234)

console.log(0.1 + 0.2)

// Floats and equality

console.log('Robin' === 'Robin')
console.log('Robin' === 'Florian')
console.log(1 + 2 === 3)

const three = 0.1 + 0.2
const result = three.toFixed(1)
console.log(result, result === '0.3')

const expectedResult = 0.3
console.log(three - 0.00001 < expectedResult)
console.log(three + 0.00001 > expectedResult)

console.log(2 ** 10)
console.log(3 ** 2)

console.log(200 % 17)
console.log(50 % 7)

age += 2
console.log(age)

age *= 5
console.log(age)

age /= 30
console.log(age)

age -= 4
console.log(age)

// order of operations follows PEMDAS
console.log(2 + 2 - (((2 * 2) / 2) % 2))
