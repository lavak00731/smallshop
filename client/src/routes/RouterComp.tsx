import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import service from '../service/service'
import { Products } from '../views/Public/Products'
import { CreateUser } from '../views/Public/CreateUser'
import { Login } from '../views/Public/Login'
import { Auth } from '../views/Private/Auth'
import { Cart } from '../views/Private/Cart'
import { Checkout } from '../views/Private/Checkout'
import { Favourites } from '../views/Private/Favourites'
import { User } from '../views/Private/User'
import { ProductPage } from '../views/Public/ProductPage'
 

export const RouterComp = () => {
  const location = useLocation();
  const [announcement, setAnnouncement] = useState("");
  const [isTokenVerified, setisTokenVerified] = useState(false);

  const tokenVerification = async () => {
    const token = localStorage.getItem("user");
    console.log("token::", token); // "user-mocked-get"

    const tokenVerified = await service(
      "http://localhost:7575/api/auth/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ token }),
      }
    );
    console.log("tokenVerified::", tokenVerified);
    console.log("tokenVerified.valid::", tokenVerified?.valid);
    if (tokenVerified && tokenVerified.valid) {
      setisTokenVerified(tokenVerified.valid);
    } else {
      setisTokenVerified(false);
    }
    console.log("isTokenVerified " ,isTokenVerified)
  };

  useEffect(() => {
    //if(location.pathname !== '/login') {
    tokenVerification();
    //}
  }, []); // location

  useEffect(() => {
    const pageTitle = document.title; // Or extract from route data
    setAnnouncement(`Navigated to ${pageTitle}`);
  }, [location]); // Update announcement when location changes
  return (
    <>
      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>
      <Routes>
        <Route index element={<Products />} />
        <Route path={"product/:id"} element={<ProductPage />} />
        <Route path="login" element={<Login />} />
        <Route path="create-user" element={<CreateUser />} />
        <Route element={<Auth isTokenVerified={isTokenVerified} />}>
          <Route path="user" element={<User />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="favourites" element={<Favourites />} />
        </Route>
      </Routes>
    </>
  );
}
