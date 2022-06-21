import React from 'react'

const ListItem = ({ item, deleteTask }) => {
  return (
    <li>
      {item} <button onClick={() => deleteTask(item)}>🗑</button>
    </li>
  )
}

export default ListItem
