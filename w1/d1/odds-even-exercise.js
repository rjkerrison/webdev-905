for (let i = 1; i < 21; i++) {
  const evenOdd = i % 2 === 0 ? 'even' : 'odd'

  if (i % 15 === 0) {
    console.log(`fizzbuzz is ${evenOdd}`)
  } else if (i % 3 === 0) {
    console.log(`fizz is ${evenOdd}`)
  } else if (i % 5 === 0) {
    console.log(`buzz is ${evenOdd}`)
  } else {
    console.log(`${i} is ${evenOdd}`)
  }
}
