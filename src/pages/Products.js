import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchByCategory } from '../redux/actions/products'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Filter from '../components/ProductsFilter/Filter'
import PorductsList from '../components/ProductsFilter/PorductsList'

const Products = () => {
  let params = useParams()

  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products)
  const category = params.slug
  const [data, setdata] = useState([])

  useEffect(() => {
    dispatch(fetchByCategory(''))
    setdata(filter(category))
  }, [category])


  const filter = (name)=> {
    const result = products.filter(el => {
      return el.categories.some((c) => c.slug === name)
   })
   result.map((el) => {
    if(data.length === 0) {
      setdata(result)
    }else{
    setdata((state) => [...state, el])

    }
  })
  return result
  }

const deleteArr = (name)=> {
  const arr = filter(name)
  setdata(data.filter(el => {
    return !arr.includes(el)
  }))
}





console.log(data);


  return (
    <Wrapper>
      <Filter />
      <PorductsList data={data} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 1fr;
  @media(min-width: 768px){
    grid-template-columns: 1fr 3fr;

  }
`

export default Products
