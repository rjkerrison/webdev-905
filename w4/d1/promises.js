// mimic fetching

let returnValue = null

function fetchMimic(url) {
  setTimeout(() => {
    returnValue = 'SOMETHING'
  }, 10000 * Math.random())
}

fetchMimic()
// POLLING
const interval = setInterval(() => {
  if (returnValue) {
    console.log(returnValue)
    clearInterval(interval)
  }
}, 500)
// getting the interval time right is hard with polling

// callbacks are much better than polling
// because we can execute them as soon as they're ready
function fetchMimicWithCallback(url, callback) {
  setTimeout(() => {
    callback('CALLBACK SOMETHING')
  }, 10000 * Math.random())
}

fetchMimicWithCallback('https://example.com/', (value) => console.log(value))

// promises
function fetchMimicWithPromise() {
  const promise = {
    // a default callback which does nothing
    callback: () => {},
    // we provide the coder with a way of overriding the callback
    then: (callback) => {
      // override the callback
      promise.callback = callback
    },
  }

  setTimeout(() => {
    // call the latest callback
    promise.callback('PROMISE FINISHED')
  }, 2000 * (2 + Math.random() * 3))
  return promise
}

const fetchPromise = fetchMimicWithPromise()

fetchPromise.then((value) => console.log(value))

// the Promise class
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    // call the latest callback
    resolve('REAL PROMISE FINISHED')
  }, 2000 * (2 + Math.random() * 3))
})

myPromise.then((value) => console.log('line 62', value))
