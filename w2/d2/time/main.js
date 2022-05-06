// ELEMENTS
// always start by getting our elements
const resultElement = document.querySelector('p#result')

const messages = [
  'Sleep well',
  'Eat fruit and veg',
  'Pay attention in class',
  'Ask questions in class',
  'Ask questions in labs',
  'Revise key concepts at home',
  'Work on your own projects',
  'Watch videos online',
  'Practice with katas',
  'Work in pairs',
  'Console log everything',
]

// EFFECT (side effect/function/thing we want to happen)
const changeText = () => {
  const newText = messages[Math.floor(Math.random() * messages.length)]
  resultElement.textContent = newText
}

// INTERVAL instead of the usual EVENT
setInterval(changeText, 2000)
