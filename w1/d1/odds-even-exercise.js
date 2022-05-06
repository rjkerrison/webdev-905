for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`)
  } else {
    console.log(`${i} is odd`)
  }
}

for (let i = 1; i <= 20; ++i) {
  // ternary operator
  console.log(`${i} is ${i % 2 === 0 ? 'even' : 'odd'}`)
}
