// STRING

const myName = 'Robin James Kerrison'

const greeting = 'Hello, ' + myName + '!'

console.log(10 + 2, '10' + '2')

console.log(`${myName} is using backticks like a pro`)

const age = 4
const increment = 2
console.log(`${age}${increment}`, age + increment)

const price = 12.99

console.log(`This thing costs £${price.toFixed(2)}!`)

// Backticks allow for multi-line strings
const longMessage = `Hello
I am a long message`

const longOldMessage = 'Hello\nthis is an old message'

const quotes = 'The three types of quote marks in JavaScript are `, \' and "'

console.log(quotes)
console.log(quotes.length)
console.log('Short string'.length)
console.log('\n'.length)

const indexOfJames = greeting.indexOf('James')
const indexOfSomethingThatIsNotThere = greeting.indexOf('Pauline')
console.log(greeting, indexOfJames)
console.log(greeting, indexOfSomethingThatIsNotThere)
console.log(greeting.charAt(-1))
console.log(greeting[-1])
console.log(greeting.charAt(greeting.length - 1))
