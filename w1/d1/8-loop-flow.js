// Loops

// for-loop
// for (initialiser; continue condition; incrementer)
for (let i = 0; i < 21; i++) {
  console.log(`i is now ${i}`)
}

const startTime = Date.now()
let someName = 'b'
// Always be sure they will exit
// the condition needs to be false eventually
while (someName.length < 50) {
  someName += 'aa'

  if (someName.length > 30) {
    break
  }
  // exiting after one second
  if (Date.now() - startTime > 1000) {
    break
  }
}
console.log(someName, someName.length)

let a = 0

// In do while
do {
  a++
  a++
  if (a > 20) {
    console.log('hello!')
  }
} while (a > 10)

console.log(a)

// for ... of ...
const someNames = ['Polly', 'Dave', 'Bob']

for (const name of someNames) {
  console.log(`Hello, ${name}`)
}

for (const letter of 'Robin') {
  console.log(letter)
}

const myProgrammingLanguages = {
  javascript: true,
  html: true,
  css: true,
  rust: false,
}

for (const key in myProgrammingLanguages) {
  console.log(key)
}

// 'continue' keyword

let i = 0

while (i < 5) {
  i++
  if (i === 3) {
    // skip to the next iteration in the loop
    continue
  }
  console.log(`The number is: ${i}.`)
}
