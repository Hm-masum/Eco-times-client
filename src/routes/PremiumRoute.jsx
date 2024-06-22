import { Navigate } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
import PropTypes from 'prop-types'
import useRole from "../Hooks/useRole";

const PremiumRoute = ({children}) => {
    const [role, isLoading] = useRole()

    if (isLoading) return <LoadingSpinner />

    if (role === 'admin') return children;
    return <Navigate to='/' />
};

export default PremiumRoute;
PremiumRoute.propTypes = {
    children: PropTypes.element,
  }