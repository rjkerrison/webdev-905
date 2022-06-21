import React from 'react'
import { useState } from 'react'

// import css specific to this component
import './Counter.css'

const Counter = () => {
  // telling React that count is *stateful*
  const [count, setCount] = useState(0)
  // const [value, setValue] = useState(initialValue)

  const increaseCount = (increment) => {
    // count is IMMUTABLE
    // we have to tell React to change it

    // "setCount" is an instruction to React
    // to re-render this component
    // with the new value provided
    setCount(count + increment)
  }
  const increaseCountBy1 = () => increaseCount(+1)

  return (
    <section className='counter'>
      <h2>Count: {count}</h2>
      <div className='buttons'>
        <button onClick={() => increaseCount(-1)}>-1</button>
        <button onClick={increaseCountBy1}>+1</button>
      </div>
    </section>
  )
}

export default Counter
