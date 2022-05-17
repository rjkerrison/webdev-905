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
setInterval(() => {
  displayMessage(messageOne)
}, 13000)

setInterval(() => {
  displayMessage(messageTwo)
}, 11000)

let count = 0
const intervalId = setInterval(() => {
  displayMessage(messageThree)
  count++
  if (count > 3) {
    displayMessage('ENDING INTERVAL')
    // clearInterval stops the interval from running
    clearInterval(intervalId)
  }
}, 7000)

console.log('intervalId', intervalId)
