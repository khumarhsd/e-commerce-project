import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { BsChevronRight } from 'react-icons/bs'

const ProductCard = ({ title, amount, link, image }) => {
  return (
    <ProductCardBg>
      <CardText>
        <ProductTitle>{title}</ProductTitle>
        <p>{amount}</p>
        <Link to={'/'}>
          {link} <BsChevronRight />
        </Link>
      </CardText>
      <img src={image} alt='' />
    </ProductCardBg>
  )
}

const ProductCardBg = styled.div`
  background: rgb(193, 184, 239);
  background: linear-gradient(
    330deg,
    rgba(193, 184, 239, 0.12695500563506656) 6%,
    rgba(245, 224, 146, 0.09334156025691531) 44%,
    rgba(245, 146, 146, 0.2) 88%
  );
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: var(--radii);

  & > div:nth-child(1) {
    align-self: flex-start;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const CardText = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
  }

  & > :nth-child(3) {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--blue);
  }
`

const ProductTitle = styled.h2`
  font-weight: var(--fw-medium);
  font-size: var(--fs-sm);
  @media (min-width: 768px) {
    font-size: var(--fs-d-xs);
  }
`

export default ProductCard
