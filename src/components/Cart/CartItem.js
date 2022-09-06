import styled from 'styled-components'
import { IoTrashOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux/es/exports'
import { updateCart, removeFromCart } from '../../redux/actions/cart'
import { Link } from 'react-router-dom'
const CartItem = ({ product }) => {
  const dispatch = useDispatch()

  const productId = product.id

  const updateHandler = (action) => {
    let quantity = product.quantity
    if (action === 'desc') {
      quantity -= 1
    } else {
      quantity += 1
    }
    dispatch(updateCart({ productId, quantity }))
  }

  return (
    <CartItemStyled key={productId}>
      <ImgStyled src={product.image.url} alt='' />
      <Link to={'/product/' + product.product_id}>
        {product.name} {product.selected_options?.[0]?.option_name}{' '}
        {product.selected_options?.[1]?.option_name}
      </Link>
      {product.selected_options?.[0] && (
        <ColorContainer>
          Rəng: {product.selected_options?.[0]?.option_name}
        </ColorContainer>
      )}
      <PriceContainer>
        {product.selected_options.length > 0 && (
          <span className='discount'>
            {product.line_total.raw + 100 * product.quantity} ₼
          </span>
        )}
        <span className='price'>{product.line_total.raw} ₼</span>
      </PriceContainer>
      <ProductCount>
        <button
          onClick={(e) => {
            updateHandler('desc')
            e.stopPropagation()
          }}
          className='btn decrement'
        >
          -
        </button>
        <p>{product.quantity}</p>
        <button
          onClick={(e) => {
            updateHandler('inc')
          }}
          className='btn increment'
        >
          +
        </button>
      </ProductCount>
      <TrashContainer>
        <IoTrashOutline onClick={() => dispatch(removeFromCart(productId))} />
      </TrashContainer>
    </CartItemStyled>
  )
}

const CartItemStyled = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  border-radius: var(--radii);
  background-color: #fff;
  padding: 1rem;

  a {
    font-weight: var(--fw-medium);
    font-size: var(--fs-md);
    grid-column: 1/3;
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, minmax(auto, 1fr));
    padding: 0.25rem 1rem;

    a {
      grid-row: 1/2;
      grid-column: 2/4;
      margin-top: 0;
      margin-left: -2rem;
      align-self: center;
      font-size: var(--fs-lg);
    }
  }
`
const ImgStyled = styled.img`
  width: 200px;
  justify-self: center;
  grid-column: 1/3;
  @media (min-width: 768px) {
    padding: 0.25rem 0;
    width: 100px;
    justify-self: start;
    grid-row: 1/3;
  }
`

const ColorContainer = styled.span`
  font-size: var(--fs-md);

  @media (min-width: 768px) {
    grid-column: 2/3;
    grid-row: 2/3;
    margin-left: -2rem;
    font-size: var(--fs-lg);
    align-self: center;
  }
`
const PriceContainer = styled.div`
  grid-column: 1/2;
  grid-row: 5/6;

  .discount {
    color: var(--gray-50);
    text-decoration: line-through;
    margin-right: 1rem;
  }

  .price {
    color: var(--red);
    font-weight: var(--fw-medium);
  }
  @media (min-width: 768px) {
    grid-column: 3/4;
    grid-row: 2/3;
    margin-left: -3rem;
    align-self: center;
  }
`

const ProductCount = styled.div`
  grid-row: 5/6;
  padding: 0 2rem;
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    background-color: #fff;
    font-size: var(--fs-d-xs);
  }
  p {
    font-size: var(--fs-lg);
  }
  @media (min-width: 768px) {
    grid-column: 4/5;
    grid-row: 1/3;
  }
`
const TrashContainer = styled.div`
  grid-row: 1/2;
  grid-column: 1/3;
  justify-self: end;
  align-self: center;
  svg {
    margin: 1rem;
    color: var(--gray-50);
    font-size: var(--fs-d-sm);
    cursor: pointer;
  }
  svg:hover {
    color: var(--red);
  }
  @media (min-width: 768px) {
    grid-row: 1/3;
    grid-column: 5/6;
  }
`

export default CartItem
