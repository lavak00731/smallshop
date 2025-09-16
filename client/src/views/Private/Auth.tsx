import { Navigate, Outlet, useLocation } from "react-router-dom";


export const Auth = ({isTokenVerified}:{isTokenVerified: boolean}) => {
  const location = useLocation();
   if(isTokenVerified) {
     return <Outlet />;
    }
    
    return <Navigate to="/login" state={{ from: location }} replace />;
    
}
