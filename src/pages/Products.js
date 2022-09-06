import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchByCategory } from '../redux/actions/products'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PorductsList from '../components/ProductsFilter/PorductsList'
import Pagination from '../components/ProductsFilter/Pagination'
import FilterContainer from '../components/ProductsFilter/FilterContainer'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

const Products = () => {
  let params = useParams()

  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  const category = params.slug
  const [data, setdata] = useState([])
  const [initData, setInitData] = useState([])

  // Pagination
  const [currentPage, setCurrentPage] = useState(0)
  const pageCount = data.length ===0 ? Math.ceil(initData.length / 6) :Math.ceil(data.length / 6)

  useEffect(() => {
    dispatch(fetchByCategory(''))
    filter(category)
  }, [category, dispatch])
  
  const filter = (name) => {
    const result = products.filter((el) => {
      return el.categories.some((c) => c.slug === name)
    })
    setInitData(result)
    setdata(result)
  }
  localStorage.setItem('products', JSON.stringify(initData))

  
  const addArr = (newData) => {
    // const localData = JSON.parse(localStorage.getItem('products'))
    const result = initData.filter((el) => {
      return el.categories.some((c) => newData.includes(c.name))
    })

    setdata(result)
  }
  const deleteArr = (newData) => {
    // const localData = JSON.parse(localStorage.getItem('products'))
    const result = initData.filter((el) => {
      return el.categories.some((c) => newData.includes(c.name))
    })

    setdata(result)
  }
  return (
    <PageWrapper>
      <Breadcrumbs category={category} />
      <Wrapper>
      <FilterContainer filter={filter} deleteArr={deleteArr} addArr={addArr} />
      <PorductsList currentPage={currentPage} data={data} setdata={setdata} />
      <Pagination setCurrentPage={setCurrentPage} pageCount={pageCount} />
    </Wrapper>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
margin: 2rem 0;

`
const Wrapper = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr;
    margin-top: 3rem;
  }
`

export default Products
