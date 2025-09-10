import { Navigate, Outlet, useLocation } from "react-router-dom";


export const Auth = ({isTokenVerified}:{isTokenVerified: boolean}) => {
  console.log("Auth component rendered");
  const location = useLocation();
  console.log('istoken', isTokenVerified)
   if(isTokenVerified) {
     return <Outlet />;
    }
    
    return <Navigate to="/login" state={{ from: location }} replace />;
    
}
