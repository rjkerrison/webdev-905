import { useState, useEffect } from 'react'

function Timer() {
  const [count, setCount] = useState(0)

  // this will set up an interval every render!
  // const intervalId = setInterval(() => {
  //   setCount(count + 1)
  // }, 1000)

  // SET UP AN INTERVAL only on MOUNT
  useEffect(() => {
    const newId = setInterval(() => {
      console.log('UPDATING')
      // if we give the state setter a function,
      // it will pass us the current value
      setCount((currentValue) => currentValue + 1)
    }, 1000)
    console.log('NEW INTERVAL:', newId)

    return () => {
      console.log('Cleanup - Component Unmounting')
      clearInterval(newId)
    }
  }, [])

  // Add a new effect that will run only
  // when the `count` value updates
  useEffect(() => {
    console.log('useEffect - on update count')
    document.title = count
  }, [count])

  return (
    <div className='Timer'>
      <h2>Timer</h2>
      <h3>{count}</h3>
    </div>
  )
}

export default Timer
