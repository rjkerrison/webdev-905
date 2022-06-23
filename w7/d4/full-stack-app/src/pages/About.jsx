import React from 'react'

const About = ({ setName, name }) => {
  return (
    <div>
      <h2>About</h2>
      <input
        type='text'
        name=''
        id=''
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}

export default About
