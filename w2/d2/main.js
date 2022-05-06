// ELEMENTS
// always start by getting our elements
const redButton = document.getElementById('red')
const yellowButton = document.getElementById('yellow')
const greenButton = document.getElementById('green')
const resultElement = document.querySelector('p#result')

console.log('red', redButton)
console.log('yellow', yellowButton)
console.log('green', greenButton)

// EFFECT (side effect/function/thing we want to happen)
const changeText = (event) => {
  const newText = event.target.getAttribute('data-hint')
  const newClass = event.target.getAttribute('data-class')
  // Set the text content of that element to the hint
  resultElement.textContent = newText

  // When changing the text to a known class name,
  // let's set that class
  if (newClass) {
    resultElement.className = ''
    resultElement.classList.add(newClass)
  }
}

// EVENT - add event listener
redButton.addEventListener('click', changeText)
greenButton.addEventListener('click', changeText)
yellowButton.addEventListener('click', changeText)
