import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ApartmentsListPage from './pages/ApartmentsListPage'
import AddApartmentPage from './pages/AddApartmentPage'

import Navbar from './components/Navbar'

import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ApartmentsListPage />} />
          <Route path='/apartments/new' element={<AddApartmentPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
