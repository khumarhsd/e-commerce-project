import BreadCrumbs from '../styles/UI/BreadCrumbs'
import { useParams } from 'react-router-dom'
import { fetchByCategory } from '../redux/actions/products'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo, useEffect } from 'react'
import DetailMain from '../components/ProductDetail/DetailMain'

const ProductDetail = () => {
  let params = useParams()
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  const product = products.products.filter((el) => {
    return el.id === params.name
  })

  useEffect(() => {
    dispatch(fetchByCategory(''))
  }, [dispatch])


  return (
    <>
      <BreadCrumbs />
      <DetailMain
        query={params}
        loading={products.loading}
        product={product[0]}
      />
    </>
  )
}

export default ProductDetail
