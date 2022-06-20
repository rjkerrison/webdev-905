// ./src/components/Navbar.js

import React from 'react'
import Button from './Button'

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <p>React - Components &amp; props</p>
        <Button text='Cancel' />
        <Button text='Accept' isFancy={true} />
      </nav>
    )
  }
}

export default Navbar
