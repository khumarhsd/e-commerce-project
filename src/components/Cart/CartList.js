import styled from 'styled-components'
import { Loader } from '../../styles/UI/Spinner'
import CartItem from './CartItem'
import Total from './Total'

const CartList = ({ data, loading }) => {
  return (
    <Wrapper>
      {loading ? (
        <Loader width={50} />
      ) : (
        <ListStyled>
          <BasketCount>Səbət ({data?.total_items})</BasketCount>
          {data?.line_items?.map((item) => (
            <CartItem key={item.id} product={item} loading={loading} />
          ))}
        </ListStyled>
      )}

      <Total total={data?.subtotal?.formatted} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 2rem 0;
  @media (min-width: 768px) {
    grid-template-columns: 3fr 1fr;
  }
`
const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
  }
`

const BasketCount = styled.h3`
  font-weight: var(--fw-medium);
  color: var(--gray-75);
`

export default CartList
