import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import ProductDetail from './ProductDetail'
import Products from './Products'

const Pages = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:slug' element={<Products />} />
        <Route path='/product/:name' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default Pages
