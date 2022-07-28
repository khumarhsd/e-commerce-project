import styled from 'styled-components'
import { Container } from '../styles/UI/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCart } from '../redux/actions/cart'
// import { Loader } from '../styles/UI/Spinner'
import CartList from '../components/Cart/CartList'
import EmptyCart from '../components/Cart/EmptyCart'
const Cart = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch])
  const cart = useSelector((state) => state.cart)
  const data = cart?.cart
  return (
    <Wrapper>
      <Container>
        {data.total_items == 0 ? (
          <EmptyCart />
        ) : (
          <CartList data={data} loading={cart.loading} />
        )}
      </Container>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: #faf9f9;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    /* background-color: #fff; */
    /* height: 200px; */
    /* margin: 0 1rem; */
  }

  @media (min-width: 768px) {
    & > div {
      /* background-color: #fff; */
      /* height: 200px; */
      /* margin: 0 3rem; */
    }
  }
`
export default Cart
