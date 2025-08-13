import { Navigate, useLocation } from "react-router"
export const Auth = ({children}) => {
  const isAuthenticated = localStorage.getItem('user');
  const location = useLocation();

  if(isAuthenticated) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}
