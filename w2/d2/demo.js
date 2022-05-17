console.log('I ADDED JAVASCRIPT TO MY PAGE!!!!!!')
console.log('I ADDED EVER MORE JS!')

document.querySelector('h1').textContent = 'manipulated by JS'

// using JS objects to represent new DOM elements
const createdParagraph = document.createElement('p')
// make changes like textContent
createdParagraph.textContent = 'I was created by JS'
// set classes
createdParagraph.classList.add('special', 'hello')

console.log(createdParagraph)

// add the created element into the page
document.body.appendChild(createdParagraph)
