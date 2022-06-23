import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          Home
        </NavLink>
      </div>
      <div>
        <Link to='/places'>Places (Link)</Link>
      </div>
      <div>
        <a href='/places'>Places (a)</a>
      </div>
      <div>
        <Link to='/about'>About</Link>
      </div>
      <div>
        <Link to='/impossible'>Impossible (redirects the user)</Link>
      </div>
    </nav>
  )
}

export default Navbar
