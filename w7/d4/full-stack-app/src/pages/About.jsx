import React from 'react'
import { useSearchParams } from 'react-router-dom'

const About = ({ setName, name }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const queryParams = Object.fromEntries(searchParams.entries())

  return (
    <div>
      <h2>About</h2>
      <p>searchParams are {JSON.stringify(queryParams)}</p>
      <input
        type='text'
        name=''
        id=''
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button
          onClick={() =>
            setSearchParams({
              ...queryParams,
              name,
              number: Math.random() * 100,
            })
          }
        >
          Add some params
        </button>
      </div>
    </div>
  )
}

export default About
