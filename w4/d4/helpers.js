const stringsAreEqual = (a, b) => {
  return a.localeCompare(b, 'en', { sensitivity: 'base' }) === 0
}

const sumArray = (arr) => {
  return arr.reduce((a, b) => a + b)
}

const a = {
  // shorthand for a field called 'sumArray' with value assigned to sumArray
  sumArray,
}
const b = {
  // shorthand for a: a
  a,
  cButLonger: 145,
  d: 'hello',
}

// destructuring
const { cButLonger: c, d: dButRenamed } = b
const cButLonger = b.cButLonger
const d = b.d
console.log(c, cButLonger, d, dButRenamed)

module.exports = { stringsAreEqual, sumArray }
