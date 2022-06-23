import { useState } from 'react'
import Counter from './components/Counter'
import Timer from './components/Timer'

import './App.css'

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className='App'>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {show && <Timer />}
      {show && <Counter />}
    </div>
  )
}

export default App
