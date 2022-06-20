// ./src/components/StudentCard.js
import React from 'react'

// parameter destructuring makes our code simpler
function StudentCard({ name, info: { city, course }, week }) {
  return (
    <div className='StudentCard'>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Cohort:</b> {city} - {course}
      </p>
      <p>
        <b>Current week: {week} </b>
      </p>
    </div>
  )
}

export default StudentCard
