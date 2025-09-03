import { Navigate, Outlet, useLocation } from "react-router";
import service from "../../service/service";
import { useEffect, useState } from "react";

export const Auth = () => {
  const token = localStorage.getItem('user');
  const location = useLocation();
  const [isTokenVerified, setisTokenVerified] = useState(false)

  const tokenVerification = async () => {
    const tokenVerified = await service("http://localhost:7575/api/auth/verify",{
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(token)
    })
    console.log('token verification',tokenVerification)
    setisTokenVerified(tokenVerified)
  }
  
  useEffect(() => {
    tokenVerification()
  }, [])

   if(isTokenVerified) {
    return <Outlet />;
   }

  return <Navigate to="/login" state={{ from: location }} replace />;
}
