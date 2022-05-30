function fetchMimicWithCallback(callback) {
  setTimeout(() => {
    callback('FETCH FINISHED')
  }, 10000 * Math.random())
}

function jsonMimicWithCallback(value, callback) {
  setTimeout(() => {
    callback(`JSON FINISHED: ${value}`)
  }, 10000 * Math.random())
}

const logIt = (finalValue) => console.log(finalValue)

fetchMimicWithCallback((value) => {
  jsonMimicWithCallback(value, logIt)
})

// CHAINING promises is much more readable
// than callback hell

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .then((data) => console.log(data))
//   .then((data) => console.log(data))
//   .then((data) => console.log(data))
//   .then((data) => console.log(data))
//   .then((data) => console.log(data))
//   .then((data) => console.log(data))
