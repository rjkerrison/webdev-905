const greeting = 'Hello'

// We can call a function before it's declared because
// of HOISTING — JavaScript reads function declaration names
// before processing the rest of the file,
// so we can call them early
greetName('Akanksha')
// this will error - no hoisting
// askHowTheyAre('Akanksha')

function greetName(personName) {
  console.log(`${greeting}, ${personName}!`)
}

// function expressions and arrow expressions
// are NOT hoisted
const askHowTheyAre = (personName) => {
  console.log(`How are you, ${personName}?`)
}

askHowTheyAre('Akanksha')
