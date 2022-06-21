import { useState } from 'react'
import ListItem from './ListItem'

import './ToDoList.css'
import ToDoListAddForm from './ToDoListAddForm'

const ToDoList = () => {
  const [items, setItems] = useState([
    'Learn react',
    'Make a cool project',
    'Get a job',
  ])

  const deleteTask = (item) => {
    // change "items"
    // find the new ones
    const filteredItems = items.filter((x) => x !== item)
    console.log('REMOVING', item, filteredItems)

    // set the new value of items in the next render
    setItems(filteredItems)
  }

  const removeFromListWithIndex = (index) => {
    const copy = [...items]
    copy.splice(index, 1)
    setItems(copy)
  }

  const removeFromListBySlices = (index) => {
    setItems([...items.slice(0, index), ...items.slice(index + 1)])
  }

  const listItems = items.map((item, i) => {
    return <ListItem key={item} item={item} deleteTask={deleteTask} />
  })

  const addTask = (newTask) => {
    setItems([...items, newTask])
  }

  const getStatus = () => {
    if (items.length > 5) {
      return <span className='bad'>Too many items!</span>
    } else if (items.length > 2) {
      return <span className='good'>Let's work!</span>
    } else {
      return <span className='bad'>Find more work</span>
    }
  }

  // if an event listener is added with .addEventListener('somename')
  // react adds it with 'onSomeName' e.g. 'onClick', 'onKeyDown'
  return (
    <section className='todo'>
      {items.length > 0 ? (
        <>
          <h2>To-Do:</h2>
          {/* we CAN render lists of elements */}
          <ul>{listItems}</ul>
        </>
      ) : (
        <h2>Happy days, all good</h2>
      )}
      <ToDoListAddForm addTask={addTask} />
      {getStatus()}
    </section>
  )
}

export default ToDoList
