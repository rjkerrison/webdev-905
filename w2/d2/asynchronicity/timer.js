const startTime = Date.now()

setInterval(() => {
  const currentTime = Date.now()
  const elapsedTime = currentTime - startTime
  const clockTime = new Date(elapsedTime)
  console.log(
    `Time since start: ${clockTime
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${clockTime.getSeconds().toString().padStart(2, '0')}`
  )
}, 1000)
