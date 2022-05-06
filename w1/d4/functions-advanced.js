// function declaration (statement)
function welcomeMessage(message) {
  return message
}

// function assigned to a variable
const greeting = welcomeMessage('So nice to have you here! Welcome!')

console.log(greeting) // So nice to have you here! Welcome!

const myFunction = welcomeMessage

console.log(welcomeMessage)
console.log(myFunction.name)

function logFunctionName(f) {
  // we can accept a function as a parameter
  console.log(`the function name is "${f.name}"`)
  // we can call that argument function from inside this function
  console.log(`running the function returns "${f()}"`)
}

const sayHello = () => {
  return 'hello'
}
const sayHowdy = function () {
  return 'howdy'
}

const sayHello2 = sayHello

logFunctionName(welcomeMessage)
logFunctionName(myFunction)
logFunctionName(sayHello)
logFunctionName(sayHowdy)
logFunctionName(sayHello2)
logFunctionName(() => {})
