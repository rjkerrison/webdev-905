const resultElement = document.querySelector('#weather-result')
const form = document.querySelector('#weather-search')
const cityInput = form.querySelector('input#city')

const apiKey = '870b1b10b58578f725b70b13aff6c357'

async function updateWeatherInfo(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  try {
    // When we use fetch() we're given a Promise to fulfill the request
    // We don't know when it will finish (because we don't know how slow the server is)
    const response = await fetch(url)

    console.log('Response received')
    const weatherInfo = await response.json()
    console.log('Data decoded')

    const description = weatherInfo.weather[0].description
    const tempInCelsius = weatherInfo.main.temp - 273.15

    resultElement.textContent = `The weather in ${city} is currently ${description}. The temperature is ${tempInCelsius.toFixed(
      2
    )} degrees Celsius.`

    return 'FINISHED'
  } catch (exception) {
    console.error(exception)
    return `DID NOT WORK: ${exception}`
  }
}

form.addEventListener('submit', async (event) => {
  // stop the default form submission process (no page load!)
  event.preventDefault()
  console.log('form submitted', cityInput.value)
  const result = await updateWeatherInfo(cityInput.value)
  console.log(result)
})
