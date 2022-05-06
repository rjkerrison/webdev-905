const allTheClocks = document.querySelectorAll('.clock-display')

function displayTime(clock, date) {
  const timeZone = clock.getAttribute('data-timezone')
  clock.textContent = date.toLocaleTimeString('en-GB', {
    timeZone: timeZone,
  })
}

// repeatedly set the time
// in 1-second intervals
const halfSecond = 500
setInterval(() => {
  allTheClocks.forEach((clock) => {
    displayTime(clock, new Date(Date.now()))
  })
}, halfSecond)

// setInterval(callback, intervalInMilliseconds)
// this will call the callback function every
// intervalInMilliseconds milliseconds

// just like setInterval, but it only fires once
setTimeout(() => {
  alert('Click anywhere to get started')
}, 1000)

const audio = document.querySelector('audio')
audio.volume = 0.2
audio.loop = true

let on = false
document.addEventListener('click', () => {
  if (!on) {
    audio.play()
  } else {
    audio.pause()
  }
  on = !on
  document.querySelector('.container').classList.toggle('start')
})
