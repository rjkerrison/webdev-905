import React from 'react'
import { useSearchParams } from 'react-router-dom'

const About = ({ setName, name }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  console.log(Array.from(searchParams.entries()))

  return (
    <div>
      <h2>About</h2>
      <p>searchParams are {JSON.stringify(searchParams)}</p>
      <p>q is {searchParams.get('q')}</p>
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
