import Offers from '../components/Offers/Offers'
import Partners from '../components/Partners/Partners'
import ProductCards from '../components/ProductCards/ProductCards'
import Showcase from '../components/Showcase/Showcase'
import ProductSection from '../components/ProductsSections/ProductSection'
import { useSelector, useDispatch } from 'react-redux'
import { fetchByCategory } from '../redux/actions/products'
import { useEffect, useMemo } from 'react'

const Home = () => {
  const products = useSelector((state) => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchByCategory(''))
  }, [dispatch])


  return (
    <div>
      <Showcase />
      <ProductSection products={products} />
      <ProductCards />
      <Offers />
      <Partners />
    </div>
  )
}

export default Home
