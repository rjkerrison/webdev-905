import React from 'react'
import { useState } from 'react'

const ToDoListAddForm = ({ addTask }) => {
  const [userInputTask, setUserInputTask] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    addTask(userInputTask)
  }

  return (
    <form action='#' onSubmit={handleSubmit}>
      <label htmlFor='id'>Task</label>
      <input
        type='text'
        placeholder='Sell my bitcoin'
        value={userInputTask}
        onChange={(event) => {
          // every time the input changes
          // React is updating its state
          setUserInputTask(event.target.value)
        }}
      />
      <input type='submit' value='Add' />
    </form>
  )
}

export default ToDoListAddForm
