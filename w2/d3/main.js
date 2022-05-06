const clocks = document.querySelectorAll('p[data-hour]')

const buildClock = (element) => {
  const targetHour = element.dataset.hour
  const now = new Date(Date.now())
  const target = new Date(now)
  target.setHours(targetHour)
  target.setMinutes(0)
  target.setSeconds(0)

  if (target < now) {
    element.textContent = 'NOW'
  } else {
    setInterval(() => setTime(target, element), 500)
  }
}

const setTime = (targetTime, element) => {
  const millisecondsRemaining = targetTime - Date.now()

  //   console.log(targetTime, 'millisecondsRemaining', millisecondsRemaining)

  const totalSeconds = Math.ceil(millisecondsRemaining / 1000)
  const totalMinutes = Math.floor(totalSeconds / 60)
  const seconds = (totalSeconds % 60).toString().padStart(2, '0')
  const minutes = (totalMinutes % 60).toString().padStart(2, '0')
  const hours = Math.floor(totalMinutes / 60)
    .toString()
    .padStart(2, '0')
  element.textContent = `${hours}:${minutes}:${seconds}`
}

clocks.forEach(buildClock)
