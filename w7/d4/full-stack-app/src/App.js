import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Impossible from './pages/Impossible'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import Places from './pages/Places'

function App() {
  const [userFirstName, setUserFirstName] = useState('')

  useEffect(() => {
    console.log('MOUNTING!')
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home firstName={userFirstName} />} />
            <Route path='places' element={<Places />} />
            {/* <Route path='places/:id' element={<PlaceDetails />} /> */}
            <Route
              path='about'
              element={
                <About setName={setUserFirstName} name={userFirstName} />
              }
            />
            <Route path='impossible' element={<Impossible />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
