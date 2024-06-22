import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import useRole from '../Hooks/useRole'
import LoadingSpinner from '../Components/LoadingSpinner'

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  console.log(role)

  if (role === 'admin') return children;
  return <Navigate to='/' />
}

export default AdminRoute

AdminRoute.propTypes = {
  children: PropTypes.element,
}
