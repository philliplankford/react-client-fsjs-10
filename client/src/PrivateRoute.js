import { Navigate } from 'react-router-dom';
// navigates user away from any route wrapped in this component
const PrivateRoute = ({ context, children, redirectTo }) => {
    const auth = context.authenticatedUser;
    return  auth ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
