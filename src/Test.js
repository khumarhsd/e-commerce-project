import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchByCategory } from '../redux/actions/products'

const Cart = () => {
  const products = useSelector((state) => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchByCategory(''))
  }, [dispatch])

  const [data, setdata] = useState([])
  let prd = products.products.map((pr) => pr)
  const filtered = (name) => {
    const result = prd.filter((data) => {
      return data.categories.some((c) => c.name === name)
    })
    // const result = products.products.map(product=> {
    //   prd.categories.filter((data) => {
    //     return data.name === category
    //   })
    // })
    setdata(result)
  }
  console.log(data)
console.log(products.products);
  return (
    <div>
      {<p onClick={() => filtered('Apple-T')}>Presss</p>}{' '}
      <p>{data.map((el) => el.name)}</p>
    </div>
  )
}

export default Cart
