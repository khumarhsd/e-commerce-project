import styled from 'styled-components'
import Gallery from './Gallery'
import { Loader } from '../../styles/UI/Spinner'
import ProductInfo from './ProductInfo'
import { useState } from 'react'
import Specs from './Specs'

const DetailMain = ({ product }) => {
  const [activeSize, setActiveSize] = useState(0)
  const [activeColor, setActiveColor] = useState(0)
  const [amount, setAmount] = useState(1)

  const variantAssets = product?.variant_groups?.[0]?.options?.[
    activeColor
  ]?.assets.map((id) => product.assets.find((el) => el.id === id))

  return (
    <>
      {!product ? (
        <Loader width={50} />
      ) : (
        <>
          <Wrapper>
            <Gallery assets={variantAssets ? variantAssets : product.assets} />
            <ProductInfo
              product={product}
              amount={amount}
              setAmount={setAmount}
              activeSize={activeSize}
              activeColor={activeColor}
              setActiveSize={setActiveSize}
              setActiveColor={setActiveColor}
            />
          </Wrapper>
          <Specs product={product} />
        </>
      )}
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  margin: 3rem 0;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default DetailMain
