const ironhackers = ['Robin', 'Pauline', 'Katya', 'Florian']

// .sort() modifies the original array
ironhackers.sort()

console.log(ironhackers)

const coins = [1, 2, 5, 10, 20, 50, 100, 200]

coins.sort()

console.log(coins)

// bubble sort
coins.sort(function (a, b) {
  if (a > b) {
    return -1
  }
  if (a < b) {
    return 1
  }
  return 0
})

console.log(coins)

coins.sort(function (a, b) {
  return a - b
})

console.log(coins)
coins.reverse()
console.log(coins)
