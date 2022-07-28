import styled from 'styled-components'
import emptyCart from '../../assets/emptyCart.svg'
import { Container } from '../../styles/UI/Container'
import { useNavigate } from 'react-router-dom'

const EmptyCart = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <div>
        <BasketCount>Səbət (0 məhsul)</BasketCount>
        <Wrapper>
          <img src={emptyCart} alt='' />
          <button onClick={handleClick}>Alış-verişə davam et</button>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 2rem 0;
  background-color: #fff;
  border-radius: var(--radii);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    color: #fff;
    gap: 1rem;
    border-radius: var(--radii);
    font-size: var(--fs-lg);
    padding: 0.75rem 3rem;
    margin: 1rem 0;
    background-color: var(--primary-100);
  }
  button:hover {
    background-color: #2db563;
    transition: all 0.3s;
  }
`
const BasketCount = styled.h3`
  font-weight: var(--fw-medium);
  color: var(--gray-75);
  margin-top: 2rem;
`

export default EmptyCart
