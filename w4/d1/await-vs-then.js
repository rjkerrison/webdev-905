function fetchThen(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log('JSON', data))
    .catch((error) => console.error('.catch', error))
}

// await PROMISES
async function fetchAsync(url) {
  try {
    const fetchPromise = fetch(url)
    // nothing runs until the promise is resolved
    const response = await fetchPromise
    const jsonPromise = response.json()
    // nothing runs until the promise is resolved
    const data = await jsonPromise
    console.log('JSON', data)
  } catch (error) {
    console.error('try catch', error)
  }
}
