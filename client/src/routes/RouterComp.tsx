
import { Routes, Route } from 'react-router'
import { Products } from '../views/Public/Products'
import { CreateUser } from '../views/Public/CreateUser'
import { Login } from '../views/Public/Login'
import { Auth } from '../views/Private/Auth'
import { Cart } from '../views/Private/Cart'
import { Checkout } from '../views/Private/Checkout'
import { Favourites } from '../views/Private/Favourites'
import { User } from '../views/Private/User'

export const RouterComp = () => {
  return (
    <Routes>
        <Route index element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="create-user" element={<CreateUser/>} />
        <Route element={<Auth />} >
            <Route path="user" element={<User />}/>
            <Route path="cart" element={<Cart />}/>
            <Route path="checkout" element={<Checkout />}/>
            <Route path="favourites" element={<Favourites />}/>
        </Route>
    </Routes>
  )
}
