console.log('I ADDED JAVASCRIPT TO MY PAGE!!!!!!')
console.log('I ADDED EVER MORE JS!')

document.querySelector('h1').textContent = 'manipulated by JS'

function addParagraph(content = 'I was created by JS') {
  // using JS objects to represent new DOM elements
  const createdParagraph = document.createElement('p')
  // make changes like textContent
  createdParagraph.textContent = content
  // set classes
  createdParagraph.classList.add('special', 'hello')
  console.log(createdParagraph)

  // add the created element into the page
  document.body.appendChild(createdParagraph)
}

// when the user clicks on the button,
// we add a paragraph with the user-provided value from the input

// We will need:
// - BUTTON
const button = document.querySelector('button#add-message')
// - INPUT
const messageInput = document.querySelector('input#message')

// always check your variables are what you think they are
console.log(button, messageInput)

// We will need to:
// - get the input value : getInputValue()
function getInputValue() {
  return messageInput.value
}
// - add the paragraph : addParagraph()
// - listen for the button click

// element.addEventListener(eventType, callback)
button.addEventListener('click', (event) => {
  console.log('EVENT TARGET', event.target.id)

  // first test the listener is correct
  console.log('YOU CLICKED THE BUTTON')
  const value = getInputValue()
  addParagraph(value)
})
