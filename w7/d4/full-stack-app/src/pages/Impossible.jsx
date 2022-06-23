import { Navigate } from 'react-router-dom'

const Impossible = () => {
  // when react MOUNTS a Navigate, the
  // internal useEffect of Navigate is changing the URL/navigating us to
  // its 'to' prop
  return <Navigate to='/' />
}

export default Impossible
