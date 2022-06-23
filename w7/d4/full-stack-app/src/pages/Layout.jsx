import { Link, NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <h1>Full Stack App</h1>
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
      </header>
      <main>
        {/* Outlet will represent the "sub-route",
        the page determined by the inner part of the route */}
        <Outlet />
      </main>
      <footer>&copy; Robin James Kerrison 2022</footer>
    </>
  )
}

export default Layout
