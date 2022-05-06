// SCOPING
// which variables are available in which part of the code

const globalVariable = 42
var hello = 'hello'

function someFunc(globalVariable) {
  // scopedVariable is not available outside this function
  const scopedVariable = 14
  console.log(`The answer is ${globalVariable}.`)
}

function someFunc2() {
  // scopedVariable is not available outside this function
  const globalVariable = 15
  console.log(`The answer is ${globalVariable}.`)
}

if (true) {
  var hello = 'hi'
  const globalVariable = 15
  someFunc(23)
}

console.log(globalVariable)
console.log(hello)

someFunc()
someFunc2()
