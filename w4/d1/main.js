const resultElement = document.querySelector('#weather-result')
const form = document.querySelector('#weather-search')
const cityInput = form.querySelector('input#city')

const apiKey = '870b1b10b58578f725b70b13aff6c357'

function updateWeatherInfo(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  // When we use fetch() we're given a Promise to fulfill the request
  // We don't know when it will finish (because we don't know how slow the server is)
  const responsePromise = fetch(url)
  console.log(responsePromise)

  // instead, we tell the browser what to do afterwards (then)
  responsePromise
    .then((res) => {
      // first, convert that response to json
      console.log('request successful!!!', res)
      return res.json()
    })
    .then((weatherInfo) => {
      // then do whatever we want with the data
      console.log('JSON DATA:', weatherInfo)
      const description = weatherInfo.weather[0].description
      const tempInCelsius = weatherInfo.main.temp - 273.15

      resultElement.textContent = `The weather in ${city} is currently ${description}. The temperature is ${tempInCelsius.toFixed(
        2
      )} degrees Celsius.`
    })
    .catch((exception) => {
      console.error(exception)
      return `DID NOT WORK: ${exception}`
    })
}

updateWeatherInfo('Bahrain')

form.addEventListener('submit', (event) => {
  // stop the default form submission process (no page load!)
  event.preventDefault()
  console.log('form submitted', cityInput.value)
  updateWeatherInfo(cityInput.value)
})
