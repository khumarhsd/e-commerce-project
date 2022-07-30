import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchByCategory } from '../redux/actions/products'

const Test = ({category}) => {
  const products = useSelector((state) => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchByCategory(''))
  }, [dispatch])

  const [data, setdata] = useState([])
  let prd = products.products.map((pr) => pr)
  const filtered = (name) => {
    const result = prd.filter((data) => {
      return data.categories.some((c) => c.slug === name)
    })

    setdata(result)
  }
  console.log(data)
  return (
    <div>
      {<p onClick={() => filtered(category)}>Presss</p>}{' '}
      <p>{data.map((el) => el.name)}</p>
    </div>
  )
}

export default Test
