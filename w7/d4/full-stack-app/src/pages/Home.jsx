import React from 'react'

const Home = ({ firstName }) => {
  return (
    <div>
      <h2>Homepage</h2>
      <p>Hello {firstName || 'user 1003'}</p>
    </div>
  )
}

export default Home
