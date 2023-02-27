import styled from 'styled-components'
import user from '../../assets/user.svg'
import heart from '../../assets/heart.svg'
import cartSvg from '../../assets/cart.svg'
import { Link } from 'react-router-dom'
import { fetchCart } from '../../redux/actions/cart'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useEffect, useState } from 'react'
import { commerce } from '../../lib/commerce'

const HeaderIcons = () => {
  const [auth, setAuth] = useState(commerce.customer.isLoggedIn())

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch])
  const { cart } = useSelector((state) => state.cart)
  return (
    <Wrapper>
      {auth ? (
        <Link to={'/profile'}>
          <img src={user} alt='' />
          
        </Link>
      ) : (
        <Link to={'/login'}>
          <img src={user} alt='' />
        </Link>
      )}

      <Link to={'/'}>
        <img src={heart} alt='' />
      </Link>
      <Link to={'/cart'}>
        <img src={cartSvg} alt='' />
      </Link>

      <span>{cart?.total_unique_items}</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  grid-column: 3/4;
  grid-row: 1/2;

  span {
    border-radius: 100%;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -1.5rem;
    margin-bottom: 1rem;
    background-color: var(--primary-100);
    font-size: var(--fs-xs);
    color: #fff;
    text-align: center;
  }

  @media (min-width: 1024px) {
    grid-column: 3/4;
    gap: 1.2rem;

    span {
      margin-left: -0.75rem;
      margin-bottom: 0.2rem;
      cursor: default;
    }
  }
`

export default HeaderIcons
