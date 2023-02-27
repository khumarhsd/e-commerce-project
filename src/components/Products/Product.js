import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Product = ({data}) => {
  return (
    <>
        {data.map((product) => (
          <ProductCard to={'/product/' + product.id} key={product.id}>
            <ImageContainer>
              {}
              <img src={product.image.url} alt='' />
            </ImageContainer>
            <div>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPrice>
                {product.variant_groups.length > 0 ? (
                  <>
                    <span className='discount'>
                      {product.price.raw + 100} ₼
                    </span>
                    <span className='priceVar'>{product.price.raw} ₼</span>
                  </>
                ) : (
                  <span className='priceRaw'>{product.price.raw} ₼</span>
                )}
              </ProductPrice>
            </div>
          </ProductCard>
        ))}
    </>
  )
}

const ProductTitle = styled.p`
  max-width: 200px;
  margin-bottom: 1rem;
  line-height: 1.75rem;
`

const ProductCard = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow-md);
  border-radius: 6px;
  padding: 1rem 2rem;

  p {
    font-size: var(--fs-md);
    font-weight: var(--fw-medium);
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }
`

const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 24px;
  align-self: center;
  img {
    max-height: 175px;
  }
  @media (min-width: 1024px) {
    img {
      max-width: 100%;
      min-height: 230px;
    }
  }
`

const ProductPrice = styled.div`
  .discount {
    color: var(--gray-50);
    font-size: var(--fs-sm);
    text-decoration: line-through;
  }
  .priceVar {
    color: var(--red);
    margin-left: 1rem;
    font-weight: var(--fw-medium);
  }
`

export default Product
