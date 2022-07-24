import styled from 'styled-components'

const PriceContainer = ({ variants, price, product }) => {
  return (
    <Price>
      {variants.length ? (
        <div>
          <span className='discount'>{price + 100} ₼</span>
          <span className='priceVar'>{price} ₼</span>
        </div>
      ) : (
        <span className='priceRaw'>{product.price.raw} ₼</span>
      )}
    </Price>
  )
}

const Price = styled.div`
  margin: 1rem 0;
  & > div {
    display: flex;
    flex-direction: column;
  }

  .discount {
    font-weight: var(--fw-medium);
    color: var(--gray-50);
    text-decoration: line-through;
  }
  .priceVar {
    font-size: var(--fs-lg);
    font-weight: var(--fw-medium);
    color: var(--red);
  }
  .priceRaw {
    font-size: var(--fs-lg);
    font-weight: var(--fw-medium);
  }

  @media (min-width: 768px) {
    & > div {
      flex-direction: row;
      align-items: center;
    }
    .priceVar {
      margin-left: 1rem;
    }

    .priceVar {
    font-size: var(--fs-xl);
  }
  .priceRaw {
    font-size: var(--fs-xl);
  }
  }
`

export default PriceContainer
