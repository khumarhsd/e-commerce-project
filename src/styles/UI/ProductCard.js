import styled from "styled-components"

const ProductCard = (props) => {
  return (
    <ProductCardStyled>{props.children}</ProductCardStyled>
  )
}

const ProductCardStyled = styled.div`
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  box-shadow: var(--shadow-md);
  border-radius: 6px;
  width: 200px;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    align-self: center;
  }

  p {
    font-size: var(--fs-md);
    font-weight: var(--fw-medium);
  }

  @media (min-width: 1024px) {
    grid-row: 2/3;
    width: 300px;
    height: 400px;
    img {
        /* width: 80%;
        height: 80%; */
    }
  }

`

export default ProductCard