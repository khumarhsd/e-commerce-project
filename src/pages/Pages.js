import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import ProductDetail from './ProductDetail'
import Products from './Products'
import { commerce } from '../lib/commerce'
import {useState} from 'react'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import PrivateRoute from '../components/PrivateRoute/PrivateRoute'

const Pages = () => {
  const [auth, setAuth] = useState(commerce.customer.isLoggedIn())
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route element={<PrivateRoute auth={auth} />}>
        <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/products/:slug' element={<Products />} />
        <Route path='/product/:name' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default Pages
