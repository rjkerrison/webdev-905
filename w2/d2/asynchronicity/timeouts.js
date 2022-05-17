const messageOne = 'I am Message One'
const messageTwo = 'Me? I am message Two'
const messageThree = 'whereas I am the third message'

function displayMessage(message) {
  console.log(message)
}

// scheduling tasks for the future
// "l"
// scheduling tasks for the future
// saying "please run this callback after 1000 milliseconds"
const timeoutId = setTimeout(() => {
  displayMessage(messageOne)
}, 1000)

setTimeout(() => {
  displayMessage(messageTwo)
  // CANCELLING the first timeout
  clearTimeout(timeoutId)
}, 500)

setTimeout(() => {
  displayMessage(messageThree)
}, 250)

setTimeout(() => {
  displayMessage('INSIDE TIMEOUT')
}, 0)
displayMessage('OUTSIDE TIMEOUT')
