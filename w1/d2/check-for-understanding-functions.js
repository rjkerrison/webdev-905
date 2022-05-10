// Create a function that accepts 3 numbers as parameters, and returns their sum.
function sum(a, b, c) {
  return a + b + c
}
console.log(sum(4, 5, 6)) // 15
console.log(sum(9, 8, 7)) // 24
console.log(sum(299, 300, 301)) // 900

sum('Robin', 'James', 'Kerrison')

// Create a function named isNameOddOrEven() that accepts a string as a parameter.
function isNameOddOrEven(name) {
  // The function should return whether a received string has an odd or even number of letters.
  const numberOfLetters = name.length
  const hasEvenLetters = numberOfLetters % 2 === 0

  // The expected return should be in the following format - string: ’<name> has an even/odd number of letters’.
  return `${name} has an ${hasEvenLetters ? 'even' : 'odd'} number of letters`
}

console.log(isNameOddOrEven('Robin'))
console.log(isNameOddOrEven('Florian'))
console.log(isNameOddOrEven('Valerian'))
