import BreadCrumbs from '../styles/UI/BreadCrumbs'
import { useParams } from 'react-router-dom'
import { fetchByCategory } from '../redux/actions/products'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
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

  const [activeSize, setActiveSize] = useState(0)
  // const colorVariantId = product[0]?.variant_groups?.[0]?.options[activeSize]?.id;

  





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
