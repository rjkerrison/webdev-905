import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'

const Layout = () => {
  return (
    <>
      <Header />
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
