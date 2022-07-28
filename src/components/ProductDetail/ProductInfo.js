import styled from 'styled-components'
import { Container } from '../../styles/UI/Container'
import star from '../../assets/star.svg'
import emptyStar from '../../assets/emptyStar.svg'
import ColorContainer from './ColorContainer'
import SizeContainer from './SizeContainer'
import PriceContainer from './PriceContainer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart, addToCart } from '../../redux/actions/cart'
import { useEffect } from 'react'
import cartSvg from '../../assets/cart.svg'

const ProductInfo = ({
  product,
  amount,
  setAmount,
  activeSize,
  activeColor,
  setActiveSize,
  setActiveColor,
}) => {
  const variants = product?.variant_groups
  const colorVariant = product.variant_groups?.[0]
  const sizeVariant = product.variant_groups?.[1]
  const dispatch = useDispatch()
  // Product Price
  const price =
    product.price.raw +
    colorVariant?.options?.[activeColor]?.price.raw +
    sizeVariant?.options?.[activeSize]?.price.raw

  // Product Name
  const productNameArr = []
  productNameArr.push(
    product.name,
    colorVariant?.options?.[activeColor]?.name,
    sizeVariant?.options?.[activeSize]?.name
  )

  const productName = !productNameArr.includes(undefined)
    ? productNameArr.join(', ')
    : productNameArr.join(' ')

  // Add To Cart
  const addToCartHandle = () => {
    console.log('hey')
    dispatch(
      addToCart({
        productId: product.id,
        amount: amount,
        colorGroupId: colorVariant?.id,
        colorVariantId: colorVariant?.options[activeColor]?.id,
        sizeGroupId: sizeVariant?.id,
        sizeVariantId: sizeVariant?.options[activeSize]?.id,
      })
    )
  }

  return (
    <div>
      <Wrapper>
        <Container>
          <ProductInfoContent>
            <ProductTitle>{productName}</ProductTitle>
            <Rating>
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={emptyStar} alt='' />
              <p>(226)</p>
              <span></span>
              <p>57 rəy</p>
            </Rating>
            <PriceContainer
              variants={variants}
              price={price}
              product={product}
            />
            {variants.length > 0 && <Hr />}
            {colorVariant && (
              <ColorContainer
                colorVariant={colorVariant}
                activeColor={activeColor}
                setActiveColor={setActiveColor}
              />
            )}
            {sizeVariant && (
              <SizeContainer
                sizeVariant={sizeVariant}
                activeSize={activeSize}
                setActiveSize={setActiveSize}
              />
            )}
            {variants.length > 0 && <Hr />}
            <ProductCount>
              <div>
                <button
                  className='btn decrement'
                  onClick={() => {
                    amount > 1 && setAmount(amount - 1)
                  }}
                >
                  -
                </button>
                <p>{amount}</p>
                <button
                  className='btn increment'
                  onClick={() => setAmount(amount + 1)}
                >
                  +
                </button>
              </div>
              <div>
                <button className='addToCart' onClick={() => addToCartHandle()}>
                  {' '}
                  <img src={cartSvg} alt='' />
                  Səbətə at
                </button>
              </div>
            </ProductCount>
          </ProductInfoContent>
        </Container>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div``

const Hr = styled.span`
  display: block;
  height: 1px;
  width: 100%;
  background-color: var(--gray-25);
`

const ProductInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  position: relative;
`
const ProductTitle = styled.h2`
  font-size: var(--fs-xl);
  font-weight: var(--fw-medium);
  width: 100%;
`
const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    height: 1rem;
    width: 1px;
    background-color: var(--gray-25);
  }

  p {
    font-size: var(--fs-sm);
  }
  p:nth-of-type(2) {
    color: var(--blue-100);
    font-weight: var(--fw-medium);
  }
`

const ProductCount = styled.div`
  display: flex;
  justify-content: space-between;

  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 145px;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: var(--gray-25);
    width: 2rem;
    height: 2rem;
    font-size: var(--fs-xl);
  }

  .btn:hover {
    background-color: #e5e5e5;
  }

  p {
    font-size: var(--fs-xl);
    font-weight: var(--fw-medium);
  }

  .addToCart {
    color: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: var(--radii);
    padding: 0.75rem 2.5rem;
    margin: 2rem 0;
    background-color: var(--primary-100);
    img {
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(27deg)
        brightness(106%) contrast(102%);
    }
  }

  .addToCart:hover {
    background-color: #2db563;
    transition: all .3s;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    & > div:nth-of-type(1) {
    }

    .addToCart {
      padding: 0.75rem 3rem;
    }
  }
`

export default ProductInfo
