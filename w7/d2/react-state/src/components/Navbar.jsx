import { useState } from 'react'
import './Navbar.css'
import NavbarMenu from './NavbarMenu'

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  // Conditional returns can short-circuit our rendering

  // if (isOpenMenu) {
  //   return <p>YOU CLICKED THE THING</p>
  // }

  return (
    <nav className='navbar'>
      <header onClick={toggleMenu}>
        <h1>Ironhack</h1>
      </header>
      {/* Yes, Haroun, you could do it like this: */}
      {/* {(() => {
        if (isOpenMenu) {
          return <NavbarMenu />
        }
      })()} */}
      {/* but don't. */}
      {isOpenMenu && <NavbarMenu />}
    </nav>
  )
}

export default Navbar
