const coins = [1, 2, 5, 10, 20, 50, 100, 200]

const sum = coins.reduce(function (previousValue, currentValue) {
  console.log({ previousValue, currentValue })
  // whatever I return
  // becomes the next previousValue
  return previousValue + currentValue
}, -388)

console.log('sum', sum)

const libraryUsers = [
  { name: 'Gary', books: ['book1', 'book2'] },
  { name: 'Robin', books: ['book1', 'book2', 'book3'] },
]

const booksCount = libraryUsers.reduce(function (previousCount, currentUser) {
  console.log({ previousCount, currentUser })
  return previousCount + currentUser.books.length
}, 0)
console.log(booksCount)

// this can be handled
// we just need our reducing function to handle the different types
const items = [1, 2, 'Robin', 10, 'Hello']
